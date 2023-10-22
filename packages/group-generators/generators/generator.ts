// group-generators/generators/tutorial-first-sismo-post-collectors/index.ts

import { dataOperators } from "@group-generators/helpers/data-operators";
import { dataProviders } from "@group-generators/helpers/data-providers";
import {
  ValueType,
  Tags,
  FetchedData,
  GroupWithData,
} from "topics/group";
import {
  GenerationContext,
  GenerationFrequency,
  GroupGenerator,
} from "topics/group-generator";

const generator: GroupGenerator = {
  generationFrequency: GenerationFrequency.Once,

  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {

    const carePassProvider = new dataProviders.CarePassProvider();
    // query all the collectors of the first Sismo Lens post
    // https://lenster.xyz/posts/0x26e5-0x02
    const Patients: FetchedData = await carePassProvider.getPatientsByDiagnoses({
      diagnosis: "melanoma",
    });

    /*
    // 2. Instantiate the Snapshot provider
    const snapshotProvider = new dataProviders.SnapshotProvider();
    // query all the voters of the Sismo space on snapshot
    // https://snapshot.org/#/sismo.eth/proposal/0xe280e236c5afa533fc28472dd0ce14e5c3514a843c0563552c962226cda05c52
    const voters: FetchedData = await snapshotProvider.queryProposalVoters({
      proposal: "0xe280e236c5afa533fc28472dd0ce14e5c3514a843c0563552c962226cda05c52"
    });

    // 3. Make a union of the two queried data
    const tutorialSismoActiveMembers = dataOperators.Union([
      collectors,
      voters,
    ]);
    */
    return [
      {
        // give a name to your Group
        name: "Melanoma Patients",
        timestamp: context.timestamp,
        // add a small description explaining how to be eligible to your Group
        description: "Care Pass Patients with Melanoma",
        // document the Group eligibility criterias more specifically
        specs: "Be a patient with Melanoma in the Patient registry",
        // reference the final data we created
          // two different data formats in the Group
          // Lens account -> "dhadrien.lens": "1"
          // Ethereum account -> "0x95af97aBadA3b4ba443ff345437A5491eF332bC5": "1", 
        data: Patients,
        valueType: ValueType.Info,
        tags: [],
      },
    ];
  },
};

export default generator;

/*
import {
    ValueType,
    Tags,
    GroupWithData,
  } from "topics/group";
  import {
    GenerationContext,
    GenerationFrequency,
    GroupGenerator,
  } from "topics/group-generator";
  
  const generator: GroupGenerator = {
    generationFrequency: GenerationFrequency.Once,
  
    generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
  
      const jsonListData0 = {
        "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045": "1",
        "0xF61CabBa1e6FC166A66bcA0fcaa83762EdB6D4Bd": "1",
        "0x2E21f5d32841cf8C7da805185A041400bF15f21A": "1",
      };
  
      return [
        {
          // give a name to your Group
          name: "tutorial-sismo-early-interactors",
          timestamp: context.timestamp,
          // add a small description explaining how to be eligible to your Group
          description: "Be an early interactor in Sismo community",
          // document the Group eligibility criterias more specifically
          specs: "Collect the first Sismo Lens post (https://lenster.xyz/posts/0x26e5-0x02) or vote to the first new Sismo DAO proposal (https://snapshot.org/#/sismo.eth/proposal/0xe280e236c5afa533fc28472dd0ce14e5c3514a843c0563552c962226cda05c52)",
          // reference the final data we created
            // two different data formats in the Group
            // Lens account -> "dhadrien.lens": "1"
            // Ethereum account -> "0x95af97aBadA3b4ba443ff345437A5491eF332bC5": "1", 
          data: jsonListData0,
          valueType: ValueType.Info,
          tags: [Tags.User, Tags.Lens, Tags.Web3Social],
        },
      ];
    },
  };
  
  export default generator;
  */