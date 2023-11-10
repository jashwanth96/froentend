import React from "react";
import { useNavigate } from "react-router-dom";

function About(){
  const navigate = useNavigate();

  const redirectToRegister = () => {
    // Redirect to the Register route
    navigate("/Home");
  }; 
  return(

<div>
            <div>
              {/* {status === "About" ? ( */}
                <div id="about">
                  <h1>Find the job That fits for your life</h1>
                  <div id="about2">
                    <h2>Who We Are</h2>
                    {/* <img id="aboutimg" alt="" src={aboutimg} /> */}
                    <p>
                      The Jobs Portal has come into being with a vision to
                      provide excellent platform to both job seekers <br></br>
                      and the employers. We believe firmly that there is no
                      other alternative of Quality Services and a client
                      <br></br> could only feel happy if we can provide them the
                      best value for their money
                    </p>
                    <br></br>
                    <p>
                      A job portal is an online platform that serves as an
                      intermediary between <br></br>
                      <b>job seekers </b>and <b>employers</b>, offering a range
                      of features and services to facilitate <br></br>the job
                      search and recruitment process. Job portals have become an
                      integral part of <br></br>the modern job market,
                      revolutionizing the way people search for employment
                      <br></br>
                      and companies hire talent. Here is some information about
                      job portals:
                    </p>
                    <br></br>
                    <p>
                      <b>1. Job Listings:</b> Job portals host a vast database
                      of job listings across various industries, <br></br> job
                      types,and geographic locations. These listings are posted
                      by employers looking to <br></br> hire candidates for
                      specific roles.<br></br>
                      <br></br>
                      <b>2. Resume Upload and Creation:</b> Job seekers can
                      create and upload their resumes to job portals. <br></br>
                      These platforms often offer tools to build and format
                      resumes to attract potential employers.<br></br>
                      <br></br>
                      <b>3. Search and Filter :</b> Users can search for jobs
                      based on specific criteria such as location, <br></br>
                      industry, job title, and salary. Advanced filtering
                      options help job seekers refine their searches.<br></br>
                      <br></br>
                      <b>4. Application Submission :</b> Job seekers can apply
                      for jobs directly through the portal. <br></br>Some
                      portals facilitate one-click applications, making the
                      process more efficient.<br></br>
                      <br></br>
                      <b>5. Company Profiles :</b> Employers can create profiles
                      on job portals, showcasing their company culture,{" "}
                      <br></br>
                      values, and job openings. This allows job seekers to learn
                      more about potential employers.<br></br>
                      <br></br>
                      <b>6. Email Alerts :</b> Job portals often provide email
                      notification services that alert job seekers to <br></br>
                      new job listings that match their criteria. This feature
                      saves time and ensures that users don't miss out on
                      relevant opportunities.<br></br>
                      <br></br>
                      <b>7. Career Resources :</b> Many job portals offer
                      additional resources such as articles, tips, <br></br>and
                      advice on resume writing, interview preparation, career
                      development, and job market trends.<br></br>
                      <br></br>
                      <b>8. Salary Information :</b> Some portals provide salary
                      information for specific job roles and industries,{" "}
                      <br></br>
                      helping job seekers negotiate better compensation
                      packages.
                      <br></br>
                      <br></br>
                      <b>9. User Accounts :</b> Both job seekers and employers
                      typically create accounts on job portals, <br></br>which
                      allow for a personalized experience. Job seekers can save
                      favorite job listings, and employers can track applicant
                      profiles.<br></br>
                      <br></br>
                      <b>10. Mobile Apps :</b> Job portals often offer mobile
                      applications, making it convenient for users to access{" "}
                      <br></br>the platform from their smartphones and tablets.
                      <br></br>
                      <br></br>
                      <b>11. Privacy and Security :</b> Job portals prioritize
                      the privacy and security of user data, including personal{" "}
                      <br></br>information and resumes. They typically have
                      strict policies in place to protect user data.<br></br>
                      <br></br>
                      <b>12. Paid Services :</b> While basic access to job
                      portals is usually free, some offer premium services,{" "}
                      <br></br>such as improved visibility of job applications
                      or the ability to contact employers directly, for a fee.
                      <br></br>
                      <br></br>
                      <b>13. Global Reach :</b> Many job portals have a global
                      presence, connecting job seekers with opportunities
                      worldwide. <br></br>This is especially beneficial for
                      those seeking international job opportunities.<br></br>
                      <br></br>
                      <b>14. Feedback and Reviews :</b> Some job portals
                      incorporate features for job seekers and employees to
                      leave <br></br>feedback and reviews about companies and
                      their hiring processes, promoting transparency.
                    </p>
                  </div>
                  <div>
                    <button id="aboutregi"
                      onClick= {redirectToRegister}>
                      Register <b>→</b>
                    </button>
                  </div>
                </div>
              {/* ) : (
                <div></div>
              )} */}
            </div>
          </div>
          );
        }
        export default About;