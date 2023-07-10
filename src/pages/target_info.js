import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { getSession } from "next-auth/react";

export default function target_info() {
  return (
    <Layout>
      <div className="px-5 py-8 md:px-8 md:py-5 lg:py-5 lg:px-10">
        <div className="flex flex-col mb-10 sm:flex-col  md:flex-row  lg:flex-row  lg:items-center lg:justify-between">
          <div className="mb-3 md:mb-3 lg:mb-0">
            <div className="">
              <h1 className="text-slate-100 text-1xl">Resolved Domain</h1>
              <h2 className="text-cyan-500">Fireeye.com</h2>
            </div>
          </div>

          <div className="flex items-center ">
            <form action="" className="mr-8 mt-3">
              <input
                type="text"
                placeholder="Example.com"
                className="rounded-md border py-1 text-slate-200 px-6 w-4/3 bg-transparent "
              />
            </form>
            <div>
              <Link className="text-slate-100" href="/profile">
                <CgProfile className="text-2xl mx-auto text-slate-100" />
                My profile
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 lg:p-5 text-sm">
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>SITE INFO</b>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">URL</h3>
              <p className="text-right col-start-2 col-span-11">
                https://fireeye.com.443
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Location</h3>
              <p className="text-right col-start-2 col-span-11">
                https://trellix.com/enus/index.html
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Title</h3>
              <p className="text-right col-start-2 col-span-11">--</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Web&nbsp;Server</h3>
              <p className="text-right col-start-2 col-span-11">Cloudflare</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">IP</h3>
              <p className="text-right col-start-2 col-span-11">
                162.156.246.125
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Content&nbsp;Length</h3>
              <p className="text-right col-start-2 col-span-11">--</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Status&nbsp;Code</h3>
              <p className="text-right col-start-2 col-span-11">301</p>
            </div>
          </div>

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>TARGET GEOLOCATION</b>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">IP</h3>
              <p className="text-right col-start-2 col-span-11">31.13.79.35</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Hostname</h3>
              <p className="text-right col-start-2 col-span-11">
                edgetarminishv.02bom1.facebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">City</h3>
              <p className="text-right col-start-2 col-span-11">Mumbai</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Region</h3>
              <p className="text-right col-start-2 col-span-11">Maharashtra</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">IP</h3>
              <p className="text-right col-start-2 col-span-11">
                162.159.246.125
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Country</h3>
              <p className="text-right col-start-2 col-span-11">IN</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Org</h3>
              <p className="text-right col-start-2 col-span-11">AS32934</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Postal</h3>
              <p className="text-right col-start-2 col-span-11">400070</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Timezone</h3>
              <p className="text-right col-start-2 col-span-11">Asia/Kolkata</p>
            </div>
          </div>

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="grid grid-cols-12 justify-around card_title bg-[#17291A] rounded-t-xl text-white p-1">
              <b className="grid grid-cols-1">#</b>
              <p className="text-center col-start-2 col-span-11 font-bold">
                Top Subdomain Found
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">1</h3>
              <p className="text-center col-start-2 col-span-11">
                ash-cas04.thefacebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">2</h3>
              <p className="text-center col-start-2 col-span-11">
                ash-cas04.thefacebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">3</h3>
              <p className="text-center col-start-2 col-span-11">
                ash-cas04.thefacebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">4</h3>
              <p className="text-center col-start-2 col-span-11">
                ash-cas04.thefacebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">5</h3>
              <p className="text-center col-start-2 col-span-11">
                ash-cas04.thefacebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">6</h3>
              <p className="text-center col-start-2 col-span-11">
                ash-cas04.thefacebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">7</h3>
              <p className="text-center col-start-2 col-span-11">
                ash-cas04.thefacebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">8</h3>
              <p className="text-center col-start-2 col-span-11">
                ash-cas04.thefacebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">9</h3>
              <p className="text-center col-start-2 col-span-11">
                ash-cas04.thefacebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">10</h3>
              <p className="text-center col-start-2 col-span-11">
                ash-cas04.thefacebook.com
              </p>
            </div>
          </div>

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="grid grid-cols-12 justify-around card_title bg-[#17291A] rounded-t-xl text-white p-1">
              <b className="grid grid-cols-1">#</b>
              <p className="text-center col-start-2 col-span-11">
                <b>IP BLOCKS</b>
              </p>
            </div>
                        <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">1</h3>
              <p className="text-center col-start-2 col-span-11">
                102.132.100.0/24
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">2</h3>
              <p className="text-center col-start-2 col-span-11">
                102.132.100.0/24
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">3</h3>
              <p className="text-center col-start-2 col-span-11">
                102.132.100.0/24
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">4</h3>
              <p className="text-center col-start-2 col-span-11">
                102.132.100.0/24
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">5</h3>
              <p className="text-center col-start-2 col-span-11">
                102.132.100.0/24
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">6</h3>
              <p className="text-center col-start-2 col-span-11">
                102.132.100.0/24
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">7</h3>
              <p className="text-center col-start-2 col-span-11">
                102.132.100.0/24
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">8</h3>
              <p className="text-center col-start-2 col-span-11">
                102.132.100.0/24
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">9</h3>
              <p className="text-center col-start-2 col-span-11">
                102.132.100.0/24
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">10</h3>
              <p className="text-center col-start-2 col-span-11">
                102.132.100.0/24
              </p>
            </div>
          </div>

          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="bg-[#17291A] rounded-t-xl text-white text-center p-1">
              <b>WHO IS INFO</b>
            </div>
            <div className="">

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Domain&nbsp;Name:</h3>
              <p className="text-right col-start-2 col-span-11">
              facebook.com
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Registrant&nbsp;Name:</h3>
              <p className="text-right col-start-2 col-span-11">
              Domain Admin
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Resgistrant&nbsp;Organization:</h3>
              <p className="text-right col-start-2 col-span-11"> Meta Platforms, Inc.</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Registrant&nbsp;Email: </h3>
              <p className="text-right col-start-2 col-span-11">doamin@fb.com</p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">ASN&nbsp;Number:</h3>
              <p className="text-right col-start-2 col-span-11">
              AS32934
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">Domain&nbsp;Age:</h3>
              <p className="text-right col-start-2 col-span-11"> 26Years 0Months</p>
            </div>
          </div>
          </div>
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245] mb-6 sm:mb-2 lg:mb-0 md:mb-0">
            <div className="grid grid-cols-12 justify-around card_title bg-[#17291A] rounded-t-xl text-white p-1">
              <b className="grid grid-cols-1">#</b>
              <p className="text-center col-start-2 col-span-11">
                <b>NAME SERVERS</b>
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">1</h3>
              <p className="text-center col-start-2 col-span-11">
                A.NS.FACEBOOK.COM
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">2</h3>
              <p className="text-center col-start-2 col-span-11">
                A.NS.FACEBOOK.COM
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">3</h3>
              <p className="text-center col-start-2 col-span-11">
                A.NS.FACEBOOK.COM
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">4</h3>
              <p className="text-center col-start-2 col-span-11">
                A.NS.FACEBOOK.COM
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">5</h3>
              <p className="text-center col-start-2 col-span-11">
                A.NS.FACEBOOK.COM
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">6</h3>
              <p className="text-center col-start-2 col-span-11">
                A.NS.FACEBOOK.COM
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">7</h3>
              <p className="text-center col-start-2 col-span-11">
                A.NS.FACEBOOK.COM
              </p>
            </div>

            <div className="grid grid-cols-12 text-white m-2">
              <h3 className="grid grid-cols-1">8</h3>
              <p className="text-center col-start-2 col-span-11">
                A.NS.FACEBOOK.COM
              </p>
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
              <b>STATUS OF ROBOTS.TXT AND SITEMAP.XML</b>
            </div>

            <div className="m-5 text-white">
              <div>https://facebook.com/robots.txt exists</div>
              <div>https://facebook.com/crossdomain.xml exists</div>
            </div>
          </div>
          <div className="bg-[#141C1D] rounded-xl border border-[#3A4245]">
            <div className="card_title bg-[#17291A] rounded-t-xl text-center text-white p-1">
              <b>COMMON EXPOSED PORTS</b>
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


export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/Login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}