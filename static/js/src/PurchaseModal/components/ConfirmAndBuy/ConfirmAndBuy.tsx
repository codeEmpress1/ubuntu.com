import React from "react";
import { Field } from "formik";
import { Row, Col, CheckboxInput } from "@canonical/react-components";

type Props = {
  termsLabel: React.ReactNode;
  marketingLabel: React.ReactNode;
};

const ConfirmAndBuy = ({ termsLabel, marketingLabel }: Props) => {
  return (
    <Row>
      <Col size={12}>
        <Field
          as={CheckboxInput}
          name="TermsAndConditions"
          label={termsLabel}
          defaultChecked={false}
        />
      </Col>
      <Col size={12}>
        <Field
          as={CheckboxInput}
          name="MarketingOptIn"
          label={marketingLabel}
          defaultChecked={false}
        />
      </Col>
    </Row>
  );
};

export default ConfirmAndBuy;
