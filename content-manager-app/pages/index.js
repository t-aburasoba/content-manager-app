import Footer from "components/Footer";
import Newsletter from "components/Newsletter";
import ResourceHighlight from "components/ResoureceHighlight";
import ResourceList from "components/ResourceList";
import Layout from "../components/Layout";

import resources from "../pages/api/data.json"

export default function Home() {
    return (
        <>
            <Layout>
                <ResourceHighlight
                    resources={resources.slice(0, 2)}
                />
                <Newsletter />
                <ResourceList
                    resources={resources.slice(2)}
                />
                <Footer />
            </Layout>
        </>
    )
}

// is called every time you wil visit the page
// function is executed ont the server
// export async function getServerSideProps() {
//
//     const resData = await fetch("http://localhost:3000/api/resources")
//     const data = await resData.json()
//
//     return {
//         props: {
//             resources: data
//         }
//     }
// }

// is called at the build time, and it's called only once
// export async function getStaticProps() {
//
//     return {
//         props: {
//             resources: data
//         }
//     }
// }