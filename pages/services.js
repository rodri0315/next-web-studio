import Head from 'next/head'

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import Pricing from '../components/pricing'
import PricingBlocksOnly from '../components/pricing-block-only'

import { getHomePageData, getPageData } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import TwoUpNoButton from '../components/2-up-no-button'

export default function ProductsPage({ homeData, page }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Services | {CMS_NAME}</title>
        </Head>
        <Jumbotron
          title={page.title}
          subtitle={page.subtitle}
          imageUrl={page.image}
        />
        <TwoUpNoButton
          intro={homeData.intro}
          products={homeData.products1}
        />
        <TwoUpNoButton
          intro=""
          products={homeData.products2}
        />
        <TwoUpNoButton
          intro=""
          products={homeData.products3}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = getPageData('services')
  const homeData = getHomePageData()
  return {
    props: { homeData, page },
  }
}
