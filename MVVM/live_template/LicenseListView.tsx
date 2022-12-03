import { useViewModel } from "@/lib/viewModels";
import { LicenseListViewModel } from "./LicenseListViewModel";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { LicenseList } from "./LicenseList";
import { useStores } from "@solvook/solvook-webapp-front/src/hooks/useStores";
import { LicenseStoreType } from "./LicenseModel";
import { LicenseListFilter } from "./LicenseListFilter";
import { Modal, Pagination } from "antd";
import { runInAction } from "mobx";
import { ModalFullInner } from "@/components/GenericPanel";
import { SlotUsedListView } from "../libraries/SlotUsedListView";
import React from "react";
import { useRouter } from "next/router";

export interface LicenseListViewProps {}

const LicenseListViewWrapper = styled.div``;

const PaginationWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const LicenseListView: React.FC<LicenseListViewProps> = observer(
  (props) => {
    const licenseStore = useStores() as LicenseStoreType;
    const router = useRouter();
    const { status, actions } = useViewModel(
      { rootStore: licenseStore, router },
      LicenseListViewModel
    );

    const currentPagination = actions.getPagination();

    return (
      <LicenseListViewWrapper>
        <LicenseListFilter total={10} expired={8} using={2} />
        <LicenseList
          onClick={actions.onItemClick}
          dataSource={actions.items}
          onEmptyClick={actions.onEmptyClick}
        />
        <PaginationWrapper>
          <Pagination
            {...currentPagination.current}
            onChange={actions.updatePageChange}
          />
        </PaginationWrapper>

        {status.showSlotList && (
          <Modal
            title="슬롯 차감 내역"
            width={650}
            open={status.showSlotList}
            footer={null}
            // runInAction(() => {
            //	 status.showSlotList = false;
            // })
            onCancel={() => {
              runInAction(() => {
                status.showSlotList = false;
              });
            }}
          >
            <ModalFullInner>
              <SlotUsedListView
                viewHeight={300}
                useScrollView={true}
                slotUseds={actions.slotUseds}
              />
            </ModalFullInner>
          </Modal>
        )}
      </LicenseListViewWrapper>
    );
  }
);
