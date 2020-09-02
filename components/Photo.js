export default function Photo() {
  return (
    <div className="photo_maintainer">
      <div className="avatar_container">
        <img
          className="avatar_img"
          src="http://img.nt-geek.club/avatar-blog-ldl.jpg"
        />
      </div>
      <div className="signature_container">
        <img
          className="signature_img"
          src="http://img.nt-geek.club/signature-ldl.png"
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
          .signature_container {
            margin-left: auto;
            margin-right: auto;
            width: 18vw;
            margin-top: 8px;
            margin-bottom: 0;
          }
          .signature_img {
            width: 18vw;
            margin-top: 8px;
            margin-bottom: 2px;
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
          }
          .avatar_img {
            width: 16vw;
            height: 16vw;
          }
          .signature_container {
            margin-left: auto;
            margin-right: auto;
            width: 10vw;
            margin-top: 8px;
            margin-bottom: 0;
          }
          .signature_img {
            width: 10vw;
            margin-top: 8px;
            margin-bottom: 2px;
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
