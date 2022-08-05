import { Avatar } from "@mui/material";
import React from "react";
import "./post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header--text">
            <h3>
              Ray{""}
              <span>
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
            <div className="post__header--description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                neque cupiditate aliquid hic ipsa quibusdam!
              </p>
            </div>
          </div>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/
                    RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAgAMBIgACEQEDEQH/xAAbAAACAgMBAAAAA
                    AAAAAAAAAAAAQUGAwQHAv/EADkQAAEDAgUBBgMHAQkAAAAAAAEAAgMEEQUSITFBBhMiUWFxgQcy0RRCUpGhscHhFSMkQ0RisrPw/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwUEBv/EACI
                    RAAICAgMAAQUAAAAAAAAAAAABAgMREgQhMQUTFDJBUf/aAAwDAQACEQMRAD8A7ShHKEhghCEACELRra5sPdZqRuVXZbGuO0mSjByeEbyV1CVOITxxh7H3P4bKHn66jw2qEWL0xZA7aeLUN9
                    QqIcyqctSyVE0slzui6w0lTFWU0dTTPEkMjczHDkLKuspC6LoSQA8yMySSYHrMlm8kkIAyITSQIF5e7IwusTbgL0gJDIXEMYZHE600UfnmuoP7XDXskiinOf8AC117+6sOM9OYXjWU19O5z2
                    izZIpXRvA9WkFakPTNLh1KRRyzuMYuzt5M5HlmOv5lZfM4ttnec4O+m+qKxjDK3Q4ZXUE9XLV4zPVxzEGngmjA7EeFxvvv5Ku9Zv8A8NKyRupG6tMuLQWJLjmG4Otiuc9YYj28z2tJAdsPJcF
                    TdlqZdNaxwX/4L1s1R0/VQSvLm08+VgPAIB+q6EqZ8J8Kdh3SzJpWhstW4ynTXL939FdF6CvOqMyX5MSE0gQdiCrCIkJlIoASChCBGVCEIAEIQkMFHYo50g7Bji0H5yOfJSKiCc7nudrcndcfM
                    m4w1X7LqY5eWUTqCGBmKx0DKeQF7S7tQCAFSaLDBi3XFJhVRIezmmDXOP4QwvI97W911vE8gZJJYZg06rmPSzw74nYfJf8A1J/63BZ3DUfqNI7Lm9Tu8MTIYmRRNDWMaGtaOAE3ENaXOIAG5PCx
                    1NRFTR55XWHAG5VbxLEJqxxae5EPuA/v4reSMw2MWxxzg6GhJaNjLyfT6rRwPE30c4imcTBKdb65T4/VabmrC8aEWve6ngC/3B21HiEKv9PYoX5aKocSRpE88+R/hWBQGIoTSQIy8oQd0IAEIQk
                    MDsorRscl+LqVUNWXE7o28krM+SesVI6OP22iv4rmbRyvYSbi1jwuTVdbJgPVFNWsa0vhcyUA7Eg2PtouwY4Oww6bulxAPdG5XFsfzzVIllZq5uUtPBH9Fz/HVT2y10X8maxhHaoqmWupYKqV+Z
                    00TXnw1F9BwvDm6+aqvwyxz+0MGdhk7r1WH9wX3dF9w+3y+w8Vbnjw/Nb6M41nNWGQd4WW5HBJO8RxNzPPAU/huERUlpJbST8Hhvp9UARmEYE5xZPW3Y0Wc2O9nE73J4/dWRMpKD7GJCEFAGQoQU
                    IAEIQkAio/EiGPa5o7zhbbnhZaur7O8cRu/k8NUebkG5JvqT/KjOmNixIkpuPaKtWzVdPXzvnc59PUagO17KQDVnoQLj0VY6xwiKelbV0zQD9637rosj6R9a+CsZaOcewJ3sfAnXyKhuosHdRULm
                    NvJDu1w8FJRS6QbZOMUNfU4BjEWKUgJdCbSxn/ADGH5mn/ANobHhd26dlh6jooq/DpL0sg1eRq08tI8R4Lkn2Jk2Jtp305lZm7w2s3kHyUr0/V4z0LWulpmmswx5HbRt+V3n/tcLb7FVS5EIS1b7J
                    qmUllI7hS00NLHlhba+5O59VlKhOn+q8Hx+IGhqmtmt3qeU5ZG+3PqLhTh03Vqkn2itpr0RSTKSYhIQhAGU7pJ8oQAlpVFXmaRCdNi4c+i1ZquSrkkia10bI35XNI1dbx8kWsNNORZSSEY+b+abCA4
                    II0Xhx28VIRq4pSNfCCdGH5Xcsd9F4wyqkfC+irGdo0aDT+VMUsBqIXNlH9279fRbEtFBJAIg3IALNLNCFVa5avT0nDGeyn1GBxxvcIKZj45nXkkDrFttf4WjX4KHwGOMvbfW+Ytynx0Vq+w1VI4kk
                    zR/jYNfcfRa75GvNgA70K8lfVap7zypGxXZHXEe0UdnScUjGOnyTuF++1vZyet26H3CzRHqPCmsOF4zWdnxBWsEzT5E2JHtZWesq6Ok7MSiQF5ygsYXAetlH175GPa2mIc37xedgl93yKu8knXCfqN
                    am+J7qAth6lw4xm9nVNE8SM9Sy9x+qv2HV1LidFFW0Molppm5o5ACMw91zTGem8Q6nhbR0MYaC8F9VLoxgH/I+Q/RdA6YwaPp/AqTCopnzNp2kdo/QuJJJNuBc7L0fCusuq2msGVfCMZYiSaE0l2FJ
                    l5QjlCANHEaQyWnhJbIwXIaPnHgtVrszc9gL8X2Ph+amFpVlLnd2jCb7FvFlJMRov/dbVLR5iJJhpw3xWampQyzpBc8Dw/qtpDYYEgIK8vbnY5uYtuLZm7hQZJGOqrKekYX1ErWAcE6n0C5F1l9uxHE
                    pq/D5Klpb3hGx5btt7+S6LV9OiRzTFUP1PfMmpt5LXrMNho4XRHUFt2uJsAfGyyuTLkN5ccRRpcdceK9y2UPDMYixDo2ozz1UmKUjyZTO/NpbQt0202OoPlZWz4YyR4r03HXVgbUVrJ5GPkfqRY3Gmw0
                    IUXLg9NRwVclPCW/ajeTUnMbW0ClfhZgNZgeB1BxBhikqp+1bC4WLGgAC/gTbb0RxHGyxvXwXKi4VpZ/pc0IQtYzQSTSQBl5QjlJADSQhAAhCEAeSgJoQALFLTwyuD5I2ucBYEi9llSSaT9Gm14a32Gm7
                    VsvYtLmm4vsD42WwmklGMY+IHJv0EIQVIQkFCEAf/2Q=="
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
