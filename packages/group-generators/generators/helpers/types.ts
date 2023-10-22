// group-generators/helpers/data-providers/tutorial-lens/types.ts

// this type informs us which parts of the set of elements we have fetched.
// it allows us to do pagination

export type Diagnosis = {
    diagnosis: string;
  };
  
  export type Patients = {
    addresses: string[];
  };
  
  export type PageInfo = {
      prev: string;
      next: string;
      totalCount: number;
    };
    
    export type Wallet = {
      address: string;
    };
    
    export type GetWhoCollectedPublicationType = {
      whoCollectedPublication: {
        items: Wallet[];
        pageInfo: PageInfo;
      };
    };
    
    // this type will be used in the index.ts file following the tutorial
    export type PublicationId = {
      publicationId: string;
    };
  /*
    export type GetWhoMirroredPublicationType = {
      profiles: {
        items: ProfileType[];
        pageInfo: PageInfo;
      };
    };*/
    