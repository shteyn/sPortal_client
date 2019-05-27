import React, { Component } from "react";
import TopNavigation from "../navigation/TopNavigation";

class FAQPage extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <div className="FaqPageContainer">
          <div>
            <h1>FAQ - Alumni Book</h1>

            <div className="textContFaqPage">
              <h4>
                <b>
                  Do I have to pay anything if I want to hire a DCI student?
                </b>
              </h4>
              <p>
                No. We don't charge for the placements of our students. We are
                more interested in the feedback of the companies where our
                Alumni work in order to continuously improve what we are doing.
              </p>
              <h4>
                <b>How can I hire a DCI student?</b>
              </h4>
              <p>
                You can either contact our students directly with the given
                contact information or come back to the DCI-team via
                graduates@digitalcareerinstitute.org, we will introduce you to
                our students. We don't charge for the placements, you just get
                in touch with them and continue with your standard application
                process.
              </p>
              <h4>
                <b>Is there a possibility to meet multiple students at once?</b>
              </h4>
              <p>
                Sure - we frequently organize Hiring Events, Speed-Dating,
                Meet-Ups in any kind of form. If you are interested in
                attending, just contact us via
                graduates@digitalcareerinstitute.org.
              </p>
              <h4>
                <b>
                  Which options do I have when I´d like to hire a DCI student?
                </b>
              </h4>
              <p>
                Our students have the possibility to do a 4 weeks internship
                which is part of the course and covered by the voucher, so it
                must not be paid. Moreover there are different options to do
                longer internships as well. For more information about this
                please contact us via graduates@digitalcareerinstitute.org.
                Beside the internships our graduates are always available for
                full time positions.
              </p>
              <h4>
                <b>
                  Are there any options to get financial support when I hire a
                  DCI student?
                </b>
              </h4>
              <p>
                Yes, the Agentur für Arbeit can support you financially. In this
                case you´ll get back 50% ot the salary you´re paying for half of
                the time the person gets hired (maximum 12 months for a 24
                months contract). For more information please contact us via
                graduates@digitalcareerinstitute.org, we´ll be happy to support
                you here.
              </p>
              <h4>
                <b>How do the courses look like?</b>
              </h4>
              <p>
                In our one year intensive full-time training we teach the skills
                needed to start a new career. Our learning method: the use of
                modern media, blended learning, project work, networking and at
                the end of the course each participant has the option to do an
                internship as part of the course. Beside teaching programming,
                we are visiting digital companies to provide insights into the
                industry and their future jobs and help building networks.
              </p>
              <h4>
                <b>How often does DCI have new graduates?</b>
              </h4>
              <p>
                Every 4-8 weeks we have a new class of around 15 people in each
                of our locations who graduate and are then ready to start
                working in the tech-industry.
              </p>
              <h4>
                <b>Are DCI students fluent in English/German?</b>
              </h4>
              <p>
                Our Alumnis come from all over the world and speak different
                languages. Nevertheless they either already have working
                knowledge of the language or gain it over the period of the
                course with us. We mainly teach in english and additionally
                offer language courses at DCI to ensure everyone reaches the
                same level in both of the languages.
              </p>
              <h4>
                <b>Do DCI students have experience in Software Development?</b>
              </h4>
              <p>
                Our students come from all walks of life thus bringing some sort
                of previous experience either in the field they are currently
                learning or what they have already done. We at DCI also make
                sure that our students gain enough practical experience during
                the course to be able to work as a junior in any tech company,
                we achieve that by building projects during our 11 month course.
              </p>
              <h4>
                <b>How is the curriculum created?</b>
              </h4>
              <p>
                What we´re teaching is mainly discussed by our tech-leads who
                have deep insights into the industry and are uptodate about
                changes in technologies. They also keep the curriculum updated
                and implement changes if necessary. For detailed information
                about our current curriculums please contact the DCI-team via
                graduates@digitalcareerinstitute.org.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQPage;
