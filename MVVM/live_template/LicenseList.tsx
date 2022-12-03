import * as React from "react";
import { useCallback } from "react";
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { ItemClickHandle } from "@/components";
import { observer } from "mobx-react-lite";
import { Button, Col, Empty, EmptyProps, Row, Tag } from "antd";
import { License, LicenseStatus } from "./LicenseModel";
import { numberFormatter } from "@/lib/utils";
import Image from "next/image";
import { secondaryBtnMixin } from "@/components/Button";

export type LicenseListItemData = License;

export type LicenseListItemMetadata = {
  action: "show" | "upgrade" | "purchase" | "renew" | "cancel";
};

export type LicenseListItemClickHandle = ItemClickHandle<
  LicenseListItemData,
  LicenseListItemMetadata
>;

export interface LicenseListProps {
  dataSource: LicenseListItemData[];
  onClick: LicenseListItemClickHandle;
  onEmptyClick?: () => void;
}

const LicenseListEmptyWrapper = styled.div`
  min-height: ${330 + 48}px; // empty 330px + header 48px

  width: 100%;
  padding: 120px 0;
  text-align: center;
  border: 1px solid ${themeGet("border.0")};
  border-radius: 8px;
`;

const EmptyTitle = styled.p`
  margin: 0;
  color: ${themeGet("text.2")};
`;
// todo: @frontend: 여기 컬러 값을 css 로 한번에 잡아서 scss mixin 처럼 사용했어요.
const LicenseListButton = styled(Button)<{ status: LicenseStatus }>`
	width: 68px;

	padding: 5px 4px;
	font-size: 12px !important;
  
	${({ status }) => status === "expired" && secondaryBtnMixin}};
`;

export const LicenseListEmpty: React.FC<{
  title: string;
  emptyOptions?: EmptyProps;
  onEmptyClick?: () => void;
}> = ({ title, emptyOptions, onEmptyClick }) => {
  const handleEmptyClick = useCallback(() => {
    if (onEmptyClick) {
      onEmptyClick();
    }
  }, [onEmptyClick]);
  return (
    <LicenseListEmptyWrapper>
      <Empty {...emptyOptions} description={<span>{title}</span>}></Empty>
    </LicenseListEmptyWrapper>
  );
};

export const LicenseListCustomEmpty: React.FC<{
  title: string;
  children?: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <LicenseListEmptyWrapper>
      <EmptyTitle>{title}</EmptyTitle>
      {children}
    </LicenseListEmptyWrapper>
  );
};

const LicenseListItemWrapper = styled.div`
  border: 1px solid ${themeGet("border.0")};
`;

// make default style
const defaultColSize = css`
  flex: 1 1 60px;
`;

const LicenseListDataCol = styled(Col)<{ active?: boolean }>`
  ${defaultColSize};

  //padding: 13px 16px;
  text-align: center;
  justify-content: center;

  color: ${({ active }) => (active ? themeGet("text.1") : themeGet("text.3"))};
`;
const renderStatus = (status: LicenseStatus) => {
  let title: string;
  let color: string;
  let backgroundColor: string;
  let preset: string;
  switch (status) {
    case "active":
      title = "이용중";
      color = "#fff1f0";
      backgroundColor = "#ffa39e";

      preset = "blue";
      break;
    case "expired":
      title = "이용 만료";
      color = "#fff1f0";
      backgroundColor = "#ffa39e";
      preset = "red";
      break;
  }

  return (
    <Tag
      color={preset}
      style={{
        width: 64,

        textAlign: "center",
        display: "inline-block",
        margin: "0 auto",
      }}
    >
      {title}
    </Tag>
  );
};

const Text = styled.span<{
  active?: boolean;
  fontWeight?: boolean;
  textSize?: number;
}>`
  display: inline-block;
  color: ${({ active }) => (active ? themeGet("text.1") : themeGet("text.3"))};
`;

const Title = styled.span`
  font-weight: 700;
`;

const Divider = styled.div`
  width: 1px;
  height: 12px;
  background-color: rgba(27, 27, 41, 0.1);
  margin: 0 6px;
`;

const LicenseListCardCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 64px;
  margin-left: 12px;
`;

export const LicenseListItem: React.FC<{
  item: LicenseListItemData;
  onClick: LicenseListItemClickHandle;
}> = observer(({ item, onClick }) => {
  const renderButton = (
    status: LicenseStatus,
    onClick: LicenseListItemClickHandle
  ) => {
    let title: string;

    const handleOnClick = () => {
      if (status === "active") {
        onClick({ item, metadata: { action: "upgrade" } });
      } else if (status === "expired") {
        onClick({ item, metadata: { action: "renew" } });
      }
    };

    switch (status) {
      case "active":
        title = "업그레이드";
        break;
      case "expired":
        title = "구매하기";
        break;
    }

    return (
      <LicenseListButton type="primary" onClick={handleOnClick} status={status}>
        {title}
      </LicenseListButton>
    );
  };

  return (
    <LicenseListItemWrapper>
      <Row gutter={32} style={{ padding: `0 16px` }} align={"middle"}>
        <LicenseListDataCol flex={`1 1 186px`} active={true}>
          <div>
            <Image width={30} height={40} src={item.imageUrl} alt="image" />
            <LicenseListCardCol>
              <Title>{item.title}</Title>
              <div>
                <span>{item.publisher}</span>
                <Divider />
                <span>{item.author}</span>
              </div>
            </LicenseListCardCol>
          </div>
        </LicenseListDataCol>
        <LicenseListDataCol active={item?.status === "active"}>
          <span>{item.category}</span>
        </LicenseListDataCol>
        <LicenseListDataCol active={item?.status === "active"}>
          <span>{item.paymentType}</span>
          <span>{item.slot}</span>
        </LicenseListDataCol>
        <LicenseListDataCol active={item?.status === "active"}>
          {numberFormatter(item.price)}원
        </LicenseListDataCol>
        <LicenseListDataCol active={item?.status === "active"}>
          {item.dueDate}
        </LicenseListDataCol>
        <LicenseListDataCol active={item?.status === "active"}>
          <Button
            type={"text"}
            onClick={() => onClick({ item, metadata: { action: "show" } })}
          >
            <Text
              active={item?.status === "active"}
              style={{ textDecoration: "underline" }}
            >
              {item.remainingSlot}
            </Text>
          </Button>
        </LicenseListDataCol>
        <LicenseListDataCol active={item?.status === "active"}>
          {renderStatus(item.status)}
        </LicenseListDataCol>
        <LicenseListDataCol active={item?.status === "active"}>
          {renderButton(item.status, onClick)}
        </LicenseListDataCol>
      </Row>
    </LicenseListItemWrapper>
  );
});

const LicenseListHeaderCol = styled(Col)`
  ${defaultColSize};

  padding: 13px 16px;
  background-color: ${themeGet("background.1", "#F5F8FB")};
  text-align: center;

  font-size: 14px;
  line-height: 22px;

  font-weight: 600;

  border-top: 1px solid ${themeGet("border.0")};
  border-bottom: 1px solid ${themeGet("border.0")};
`;

export const LicenseListHeader: React.FC<{}> = () => {
  return (
    <Row gutter={32} style={{ padding: `0 16px` }}>
      <LicenseListHeaderCol flex={`1 1 186px`}>자료명</LicenseListHeaderCol>
      <LicenseListHeaderCol>구분</LicenseListHeaderCol>
      <LicenseListHeaderCol>요금제</LicenseListHeaderCol>
      <LicenseListHeaderCol>가격</LicenseListHeaderCol>
      <LicenseListHeaderCol>이용 기간</LicenseListHeaderCol>
      <LicenseListHeaderCol>남은 슬롯</LicenseListHeaderCol>
      <LicenseListHeaderCol>이용 상태</LicenseListHeaderCol>
      <LicenseListHeaderCol></LicenseListHeaderCol>
    </Row>
  );
};

export const LicenseList: React.FC<LicenseListProps> = observer(
  ({ dataSource, onClick, onEmptyClick }) => {
    if (dataSource.length <= 0) {
      return (
        <LicenseListEmpty
          title={"표시할 데이터가 없습니다."}
          emptyOptions={{
            image:
              "https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",
            imageStyle: {
              height: 60,
            },
          }}
        />
      );
    }

    return (
      <>
        <LicenseListHeader />
        {dataSource.map((item) => (
          <LicenseListItem item={item} key={item.id} onClick={onClick} />
        ))}
      </>
    );
  }
);
