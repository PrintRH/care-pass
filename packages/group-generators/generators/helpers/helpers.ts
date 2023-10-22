// group-generators/helpers/data-providers/tutorial-lens/index.ts
//import { gql } from "graphql-request";
import axios from "axios";
// import the queries
//import { getWhoCollectedPublicationQuery } from "./queries";
  // import the types
  import {
    Diagnosis,
    Patients
  } from "./types";
  // import the GraphQL Provider class
  //import { GraphQLProvider } from "@group-generators/helpers/data-providers/graphql";
  // Import the FetchedData type
  import { FetchedData } from "topics/group";

  export class CarePassProvider { // extends GraphQLProvider 
    url: string;

    public constructor() {
      this.url = "postgresql://postgres:postgres@localhost:5432/care_pledge_db?schema=public";
    }
    
    // method that create the fetchedData object
    public async getPatientsByDiagnoses({diagnosis}: Diagnosis): Promise<FetchedData> {
      const dataProfiles: FetchedData = {};
      let patientAddress: string[];
      try {
        const req: Patients = await this.getPatients(diagnosis);
        patientAddress = req.addresses;
      } catch (error) {
        throw new Error("Error fetching patients: " + error);
      }
      
      await Promise.all(patientAddress).then((addresses) => {
        addresses.forEach((address) => {
          if (address != "") {
            dataProfiles[address] = 1;
          }
        });
      });

      return dataProfiles;
    }

    private async getPatients(endpoint: string): Promise<Patients> {
      const { data: res } = await axios({
        url: this.url + endpoint,
        method: "get",
      });
      return res;
    }

    public async getPatientsByDiagnosesCount({diagnosis}: Diagnosis): Promise<number> {
      const owners = await this.getPatientsByDiagnoses({ diagnosis });
      return Object.keys(owners).length;
    }
}