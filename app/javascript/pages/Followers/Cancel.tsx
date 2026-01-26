import React from "react";

import { PoweredByFooter } from "$app/components/PoweredByFooter";

const FollowersCancel = () => (
  <>
    <main className="stack single-page-form">
      <header>
        <h2>You have been unsubscribed.</h2>
        <p>You will no longer get posts from this creator.</p>
      </header>
    </main>
    <PoweredByFooter />
  </>
);

FollowersCancel.disableLayout = true;

export default FollowersCancel;
