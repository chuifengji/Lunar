export default function Photo() {
  return (
    <div className="photo_maintainer">
      <div className="avatar_container">
        <img
          className="avatar_img"
          src="https://img.ethanlv.cn/avatar-blog-ldl.jpg"
        />
      </div>

      <style jsx>{`
        @media (min-width: 300px) {
          .avatar_container {
            overflow: hidden;
            margin-left: auto;
            margin-right: auto;
            width: 30vw;
            height: 30vw;
            margin-top: 60px;
            border-radius: 15vw;
          
          }
          .avatar_img {
            width: 30vw;
            height: 30vw;
          }
          .photo_maintainer {
            display: flex;
            justify-center: center;
            flex-direction: column;
            width: 100%;
          }
        }
        @media (min-width: 640px) {
        }
        @media (min-width: 1024px) {
        }
        @media (min-width: 1280px) {
          .avatar_container {
            overflow: hidden;
            margin-left: auto;
            margin-right: auto;
            width: 16vw;
            height: 16vw;
            margin-top: 50px;
            border-radius: 9vw;
            border:4px solid rgb(11, 122, 122);
          }
          .avatar_img {
            width: 16vw;
            height: 16vw;
          }
          .avatar_img:hover{
          transform: rotate(2160deg);
          transition: transform 3s ease;
          }
          .photo_maintainer {
            display: flex;
            justify-center: center;
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
