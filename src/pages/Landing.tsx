import Layout from "../components/common/Layout";
import TextReveal from "../components/common/TextReveal";

export default function LandingPage() {

  return (
    <Layout showContact={true}>
      <div className="m-auto max-w-5xl text-center pt-20 space-y-3">
        {/* <TypeWriter content="Hi, my name is Sunny" speed={100} showCursor={true}/> */}
        {/* <div className="text-5xl">Hi, my name is Sunny</div> */}
        <TextReveal text="Hi, my name is Sunny" style="text-5xl"/>
        <div className="text-2xl">Computer Science Undergraduate at Northeastern University</div>
      </div>
    </Layout>
  );
}
