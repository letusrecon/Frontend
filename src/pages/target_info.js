import Layout from "@/Components/Layout";
import styles from "./target_info.module.css";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function target_info() {
  return (
    <Layout>
      <div className="py-20 px-7">
        <div className=" flex justify-between items-center px-3  mb-5">
          <div className="">
            <div className="">
              <h1 className="text-slate-100 text-1xl">Resolved Domain</h1>
              <h2 className="text-cyan-500">Fireeye.com</h2>
            </div>
          </div>

          <div className="flex ">
            <form action="" className="mr-8 mt-3">
              <input
                type="text"
                placeholder="Example.com"
                className="rounded-md border py-1 px-6 w-4/3 bg-transparent "
              />
            </form>
            <div>
              <CgProfile className="text-2xl mx-auto text-slate-100" />
              <Link className="text-slate-100" href="/">
                My profile
              </Link>
            </div>
          </div>
        </div>
        {/* card container */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-6 lg:p-5 text-sm">
          {/* card*/}

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>SITE INFO</b>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>URL</h3>
              <h3>https://fireeye.com.443</h3>
            </div>
            <div className="grid grid-cols-2 justify-between text-white m-2 ">
              <h3>Location</h3>
              <h3>https://trellix.com/enus/index.html</h3>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>Title</h3>
              <h3>--</h3>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>Web Server</h3>
              <h3>Cloudflare</h3>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>IP</h3>
              <h3>162.159.246.125</h3>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>Content Length</h3>
              <h3>--</h3>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>Status Code</h3>
              <h3>301</h3>
            </div>
          </div>

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>Targeted GEOLOCATION</b>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>IP</h3>
              <h3>31.12.79.35</h3>
            </div>
            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>Hostname</h3>
              <h3>edgetarminishv.02bom1.facebook.com</h3>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>City</h3>
              <h3>Mumbai</h3>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>Region</h3>
              <h3>Maharashtra</h3>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>IP</h3>
              <h3>162.159.246.125</h3>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2 ">
              <h3>Country</h3>
              <h3>IN</h3>
            </div>

            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>Org</h3>
              <h3>AS32934 Facebook In.</h3>
            </div>
            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>Postal</h3>
              <h3>400070</h3>
            </div>
            <div className="grid grid-cols-2 justify-between text-white m-2">
              <h3>Timezone</h3>
              <h3>Asia/Kolkata</h3>
            </div>
          </div>

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="grid grid-cols-3 justify-around card_title bg-[#17291A] rounded-t-xl text-white p-1">
              <b>#</b>
              <p>
                <b>Top Subdomain Found</b>
              </p>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>1</h3>
              <h3>ash_cas04.thefacebook.com</h3>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>2</h3>
              <h3>ash_cas04.thefacebook.com</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>3</h3>
              <h3>ash_cas04.thefacebook.com</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>4</h3>
              <h3>ash_cas04.thefacebook.com</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>5</h3>
              <h3>ash_cas04.thefacebook.com</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>6</h3>
              <h3>ash_cas04.thefacebook.com</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>7</h3>
              <h3>ash_cas04.thefacebook.com</h3>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>8</h3>
              <h3>ash_cas04.thefacebook.com</h3>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>9</h3>
              <h3>ash_cas04.thefacebook.com</h3>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>10</h3>
              <h3>ash_cas04.thefacebook.com</h3>
            </div>
          </div>

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="grid grid-cols-3 justify-around card_title bg-[#17291A] rounded-t-xl text-white p-1">
              <b>#</b>
              <b className="mx-6">IP Blocks</b>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>1</h3>
              <h3>102.132.100.0/24</h3>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>2</h3>
              <h3>102.132.100.0/24</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>3</h3>
              <h3>102.132.100.0/24</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>4</h3>
              <h3>102.132.100.0/24</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>5</h3>
              <h3>102.132.100.0/24</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>6</h3>
              <h3>102.132.100.0/24</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>7</h3>
              <h3>102.132.100.0/24</h3>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>8</h3>
              <h3>102.132.100.0/24</h3>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>9</h3>
              <h3>102.132.100.0/24</h3>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>10</h3>
              <h3>102.132.100.0/24</h3>
            </div>
          </div>

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="bg-[#17291A] rounded-t-xl text-white text-center p-1">
              <b>WHO IS INFO</b>
            </div>

            <div className="text-white mx-5 my-3">
              <div>
                <h3>Domain Name: facebook.com</h3>
              </div>
              <div>
                <h3>Registrant Name: Domain Admin</h3>
              </div>

              <div>
                <h3>Resgistrant Organization: Meta Platforms, Inc.</h3>
              </div>

              <div>
                <h3>Registrant Email: doamin@fb.com</h3>
              </div>

              <div>
                <h3>ASN Number: AS32934</h3>
              </div>

              <div>
                <h3>Domain Age: 26Years 0Months</h3>
              </div>
            </div>
          </div>
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="grid grid-cols-3 justify-around card_title bg-[#17291A] rounded-t-xl text-white p-1">
              <b>#</b>
              <b className="mx-6">Name Servers</b>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>1</h3>
              <h3>A.NS.FACEBOOK.COM</h3>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>2</h3>
              <h3>B.NS.FACEBOOK.COM</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>3</h3>
              <h3>C.NS.FACEBOOK.COM</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>4</h3>
              <h3>D.NS.FACEBOOK.COM</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>5</h3>
              <h3>D.NS.FACEBOOK.COM</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>6</h3>
              <h3>A.NS.FACEBOOK.COM</h3>
            </div>

            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>7</h3>
              <h3>B.NS.FACEBOOK.COM</h3>
            </div>
            <div className="grid grid-cols-3 justify-between text-white m-2">
              <h3>8</h3>
              <h3>C.NS.FACEBOOK.COM</h3>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 lg:p-5 text-sm">
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>SITE INFO</b>
            </div>

            <div className="text-center m-5 text-white">
              <h3>CMS: WordPress</h3>
            </div>
          </div>
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>Status of Robots.txt and Sitemap.xml</b>
            </div>

            <div className="m-5 text-white">
              <div>https://facebook.com/robots.txt exists</div>
              <div>https://facebook.com/crossdomain.xml exists</div>
            </div>
          </div>
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>Common Exposed Ports</b>
            </div>

            <div className="text-center m-5 text-white">
              <div>facebook.com:443</div>
              <div>facebook.com:80</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
