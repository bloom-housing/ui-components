import * as React from "react"
import { GetApplication } from "./GetApplication"

export default {
  title: "Listing Sidebar/Get Application",
  component: GetApplication,
}

const strings = {
  applyOnline: "Apply Online",
  downloadApplication: "Download Application",
  getAPaperApplication: "Get a Paper Application",
  getDirections: "Get Directions",
  howToApply: "How to Apply",
  officeHoursHeading: "Office Hours",
  pickUpApplication: "Pick up an application",
  orString: "or",
}

export const AllFields = () => {
  return (
    <GetApplication
      onlineApplicationURL={"online-app-url"}
      applicationsOpen={true}
      applicationsOpenDate={"November 20th, 2021"}
      paperApplications={[
        { fileURL: "file-url-en", languageString: "English" },
        { fileURL: "file-url-es", languageString: "Spanish" },
      ]}
      paperMethod={true}
      postmarkedApplicationsReceivedByDate={"November 30th, 2021"}
      applicationPickUpAddressOfficeHours={"M-F 9am-5pm"}
      applicationPickUpAddress={{
        city: "City",
        state: "State",
        street2: "Street 2",
        street: "Pick Up Address Street",
        zipCode: "90210",
      }}
      preview={false}
      strings={strings}
    />
  )
}

export const WithoutPaperAppFiles = () => {
  return (
    <GetApplication
      applicationsOpen={true}
      applicationsOpenDate={"November 20th, 2021"}
      paperApplications={[]}
      paperMethod={true}
      postmarkedApplicationsReceivedByDate={"November 30th, 2021"}
      applicationPickUpAddressOfficeHours={"M-F 9am-5pm"}
      applicationPickUpAddress={{
        city: "City",
        state: "State",
        street2: "Street 2",
        street: "Pick Up Address Street",
        zipCode: "90210",
      }}
      preview={false}
      strings={strings}
    />
  )
}

export const Preview = () => {
  return (
    <GetApplication
      onlineApplicationURL={"online-app-url"}
      applicationsOpen={true}
      applicationsOpenDate={"November 20th, 2021"}
      paperApplications={[
        { fileURL: "file-url-en", languageString: "English" },
        { fileURL: "file-url-es", languageString: "Spanish" },
      ]}
      paperMethod={true}
      postmarkedApplicationsReceivedByDate={"November 30th, 2021"}
      applicationPickUpAddressOfficeHours={"M-F 9am-5pm"}
      applicationPickUpAddress={{
        city: "City",
        state: "State",
        street2: "Street 2",
        street: "Pick Up Address Street",
        zipCode: "90210",
      }}
      preview={true}
      strings={strings}
    />
  )
}

export const OpenInFuture = () => {
  return (
    <GetApplication
      onlineApplicationURL={"online-app-url"}
      applicationsOpen={false}
      applicationsOpenDate={"November 20th, 2021"}
      paperApplications={[
        { fileURL: "file-url-en", languageString: "English" },
        { fileURL: "file-url-es", languageString: "Spanish" },
      ]}
      paperMethod={true}
      postmarkedApplicationsReceivedByDate={"November 30th, 2021"}
      applicationPickUpAddressOfficeHours={"M-F 9am-5pm"}
      applicationPickUpAddress={{
        city: "City",
        state: "State",
        street2: "Street 2",
        street: "Pick Up Address Street",
        zipCode: "90210",
      }}
      preview={false}
      strings={{
        ...strings,
        applicationsOpenInFuture:
          "Application will be available for download and pick up on November 20th, 2021",
      }}
    />
  )
}

export const Pickup = () => {
  return (
    <GetApplication
      applicationsOpen={true}
      applicationsOpenDate={"November 20th, 2021"}
      paperApplications={[]}
      paperMethod={false}
      postmarkedApplicationsReceivedByDate={"November 30th, 2021"}
      applicationPickUpAddressOfficeHours={"M-F 9am-5pm"}
      applicationPickUpAddress={{
        city: "City",
        state: "State",
        street2: "Street 2",
        street: "Pick Up Address Street",
        zipCode: "90210",
      }}
      preview={false}
      strings={strings}
    />
  )
}

export const OnlineAndNoPickUp = () => {
  return (
    <GetApplication
      onlineApplicationURL={"online-app-url"}
      applicationsOpen={true}
      applicationsOpenDate={"November 20th, 2021"}
      paperApplications={[]}
      paperMethod={false}
      postmarkedApplicationsReceivedByDate={"November 30th, 2021"}
      preview={false}
      strings={strings}
    />
  )
}

export const PaperAndPickup = () => {
  return (
    <GetApplication
      applicationsOpen={true}
      applicationsOpenDate={"November 20th, 2021"}
      paperApplications={[
        { fileURL: "file-url-en", languageString: "English" },
        { fileURL: "file-url-es", languageString: "Spanish" },
      ]}
      paperMethod={true}
      postmarkedApplicationsReceivedByDate={"November 30th, 2021"}
      applicationPickUpAddressOfficeHours={"M-F 9am-5pm"}
      applicationPickUpAddress={{
        city: "City",
        state: "State",
        street2: "Street 2",
        street: "Pick Up Address Street",
        zipCode: "90210",
      }}
      preview={false}
      strings={strings}
    />
  )
}

export const PaperAndNoPickup = () => {
  return (
    <GetApplication
      applicationsOpen={true}
      applicationsOpenDate={"November 20th, 2021"}
      paperApplications={[
        { fileURL: "file-url-en", languageString: "English" },
        { fileURL: "file-url-es", languageString: "Spanish" },
      ]}
      paperMethod={true}
      postmarkedApplicationsReceivedByDate={"November 30th, 2021"}
      preview={false}
      strings={strings}
    />
  )
}
