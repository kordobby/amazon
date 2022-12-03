import React from "react";
import { Provider } from "mobx-react";
import styled from "styled-components";
import { createLicenseStore, License } from "./LicenseModel";
import { LicenseListView } from "./LicenseListView";
import { LicenseListSearchView } from "./LicenseListView";

export interface LicenseListPageProps {
  licenses?: License[];
}

const LicenseListPageWrapper = styled.div``;
const LicenseListPageTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
`;

export const LicenseListPage: React.FC<LicenseListPageProps> = ({
  licenses,
}) => {
  const store = createLicenseStore({ licenses }); // 최상단의 통합 스토어에서 관리
  return (
    <LicenseListPageWrapper>
      <Provider {...store}>
        <LicenseListPageTitle>구매 관리</LicenseListPageTitle>
        <LicenseListSearchView />
        <LicenseListView />
      </Provider>
    </LicenseListPageWrapper>
  );
};
