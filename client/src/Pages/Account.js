import React from 'react'
import AccountHolderDiv from "../Components/Account/"

export function Account(props) {
    return (
      <>
        <AccountHolderDiv userData={props.userData} setUserData={props.setUserData} />

      </>
    );
}
