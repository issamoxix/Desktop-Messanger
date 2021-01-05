import { Avatar } from "@material-ui/core";
import React from "react";

const MyMessage = () => {
  return (
    <div className="Message my">
      <Avatar style={{ alignSelf: "flex-end" }} />
      <div className="MessageBody my_b">
        <p>
          First Message Here .....First Message Here .....First Message Here
          .....First Message Here .....First Message Here ..... First Message
          Here .....First Message Here .....First Message Here .....First
          Message Here .....First Message Here ..... First Message Here
          .....First Message Here .....First Message Here .....First Message
          Here ..... First Message Here .....First Message Here .....First
          Message Here .....
        </p>
      </div>
    </div>
  );
};

export default MyMessage;
