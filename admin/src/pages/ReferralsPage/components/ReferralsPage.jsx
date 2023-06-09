import React from 'react';

import { Row } from "antd";

import { referralsManagementSelector } from "../../../redux/selectors.js";
import { useInput } from "../../../hooks/useInput.js";
import { useAppSelector } from "../../../hooks/useAppSelector.js";
import { Main } from "../../pagesStyle.js";

import { PageHeader } from "../../../components/pageHeaders/pageHeaders.jsx";
import { Cards } from "../../../components/cards/frame/cards-frame.jsx";
import Loader from "../../../Loader.jsx";
import ApplicationModule from "./ApplicationModule.jsx";
import AnnualPayoutsModule from "./AnnualPayoutsModule.jsx";

const ReferralsPage = () => {
  const { isFetching } = useAppSelector(referralsManagementSelector);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
      <PageHeader
        ghost
        title='Работа с заявками'
      />
      <Main>
        <Cards headless>
          <div style={ { minHeight: 'calc(100vh - 300px)' } }>
            <Row gutter={ [36, 36] }>
              <ApplicationModule />
              {/*<AnnualPayoutsModule />*/}
            </Row>
          </div>
        </Cards>
      </Main>
    </>
  );
};

export default ReferralsPage;
