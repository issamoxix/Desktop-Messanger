import { Avatar } from "@material-ui/core";
import React from "react";

const Message = () => {
  return (
    <div className="Message">
      <Avatar style={{ alignSelf: "flex-end" }} />
      <div className="MessageBody">
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

export default Message;
