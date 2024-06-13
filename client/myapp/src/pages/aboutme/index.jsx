import { useState } from "react";
import "./index.scss";

function Aboutme() {
  const [isExpanded, setIsExpanded] = useState('');
  const toggleText = () => {
setIsExpanded(!isExpanded);
  };
  return (
    <div className="about">

      <div className="section numberone">
        <div>
          <img
            src="https://www.anmum.com/content/dam/anmum_global/anmumwebsite/Vietnam/vuong-tron-revamp/about-us/Banner-5.jpg"
            alt=""
          />
        </div>
        
      </div>

      <div className="section numbertwo">
      <div className="font numtow">
          <br />
          <h1>GIỚI THIỆU CHUNG</h1>
          <h3>
            HAPPY MOTHER & BABY được thành lập với sứ mệnh mang đến dinh dưỡng tốt nhất cho mẹ bầu và bé yêu.
            Với cam kết chất lượng và an toàn, chúng tôi mong muốn mang đến sự chăm sóc tốt nhất, tạo nên nền tảng vững chắc cho sự phát triển toàn diện của trẻ và sức khỏe của mẹ
            giúp mỗi gia đình có một khởi đầu khỏe mạnh và hạnh phúc.
          </h3>
          {isExpanded && (
            <h3 className="extra-text">
              Tại HAPPY MOTHER & BABY, chúng tôi hiểu rằng dinh dưỡng trong giai đoạn mang thai và những năm đầu đời của bé đóng vai trò vô cùng quan trọng. Vì vậy, chúng tôi không ngừng nghiên cứu và phát triển các sản phẩm dinh dưỡng với công thức tối ưu, được chứng nhận bởi các chuyên gia hàng đầu. Sản phẩm của chúng tôi không chỉ đảm bảo cung cấp đầy đủ dưỡng chất thiết yếu mà còn an toàn và thân thiện với sức khỏe.
              <br />
              <br />
              <img
                src="https://www.anmum.com/content/dam/anmum_global/anmumwebsite/Vietnam/an-uong-dung-cach-trong-suot-thai-ky.jpg"
                alt=""
              />
              <br />
              <br />
              Chúng tôi tự hào là đối tác tin cậy của nhiều gia đình trên hành trình chăm sóc sức khỏe mẹ và bé. Với đội ngũ chuyên gia giàu kinh nghiệm và tận tâm, HAPPY MOTHER & BABY luôn sẵn sàng lắng nghe và hỗ trợ các bà mẹ trong việc lựa chọn sản phẩm phù hợp nhất. Chúng tôi tin rằng, sự đồng hành và chăm sóc tận tâm sẽ giúp mỗi bà mẹ có thêm niềm tin và sự an tâm trong suốt quá trình mang thai và nuôi dưỡng con yêu.
              <br />

              HAPPY MOTHER & BABY không chỉ là nơi cung cấp các sản phẩm dinh dưỡng mà còn là nơi chia sẻ kiến thức, kinh nghiệm và những giá trị tốt đẹp. Chúng tôi mong muốn xây dựng một cộng đồng vững mạnh, nơi các bà mẹ có thể trao đổi, học hỏi và cùng nhau phát triển.
              <br />
              <br />
              Chúng tôi cam kết không ngừng nâng cao chất lượng sản phẩm và dịch vụ để xứng đáng với niềm tin và sự lựa chọn của các gia đình. Hãy cùng HAPPY MOTHER & BABY kiến tạo nên những khởi đầu tuyệt vời cho sức khỏe và hạnh phúc của mẹ và bé.
            </h3>
          )}
          <button onClick={toggleText}>
            {isExpanded ? 'Thu lại' : 'Xem thêm'}
          </button>
        </div>
      </div>

      <div className="section numberthree">
        <div className="font numthree">
          <h1>GIÁ TRỊ CỐT LÕI</h1>
          <h3>Chất Lượng: Chúng tôi cam kết chỉ cung cấp những sản phẩm đạt chuẩn chất lượng cao nhất.</h3>
          <h3>An Toàn: Tất cả sản phẩm đều được kiểm định và chứng nhận an toàn.</h3>
          <h3>Tận Tâm: Mỗi khách hàng đều được phục vụ với sự tận tâm và chu đáo nhất.</h3>
          <h3>Sáng Tạo: Luôn đổi mới để mang đến sản phẩm và dịch vụ tốt nhất.        </h3>
          
        </div>
        <img
          src="https://www.anmum.com/content/dam/anmum_global/anmumwebsite/MY/Parenting-and-Header/Articles-Image/Motherhood/Motherhood_Landing_article.jpg"
          alt=""
        />
      </div>

      <div className="section numberfour">
        <img
          src="https://img5.thuthuatphanmem.vn/uploads/2021/12/16/anh-dep-me-va-be_094349636.jpg"
          alt=""
        />
        <div className="font numfour">
          <h1>MỤC ĐÍCH HÌNH THÀNH VÀ TẦM NHÌN</h1>
          <h3>
            Sản Phẩm Và Dịch Vụ:
            Chúng tôi cung cấp đa dạng các sản phẩm sữa dành cho mẹ bầu và trẻ em, cùng các dịch vụ tư vấn dinh dưỡng, giao hàng tận nơi, và chăm sóc khách hàng sau mua.
            Tầm Nhìn Tương Lai:
            Sữa Mẹ Yêu Thương hướng tới mở rộng quy mô, đa dạng hóa sản phẩm và đóng góp nhiều hơn cho cộng đồng.
          </h3>
          
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
