export type ResRamdomUsersType={
    results: RamdomUserType[]
}

 export type RamdomUserType ={
    name?: {
        title: string,
        first: string,
        last: string,
      },
      login?:{
        uuid: string,
        username: string,
        password: string
        salt: string,
        md5 : string,
        sha1: string,
        sha256: string,
      },
      picture:{
        large: string,
        medium: string,
        thumbnail: string,
      }
 }