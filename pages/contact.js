import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta
          name="descrpition"
          content="For now, everything would store into database. In the future, I would add a email sender to get every piece of response at once."
        />
      </Head>
      <ContactForm />;
    </Fragment>
  );
}

export default ContactPage;
