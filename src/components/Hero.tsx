/**
 * Components
 */
import { Button } from '@/components/ui/button'

/**
 * Assets
 */
import { heroBanner } from '@/assets'

/**
 * Constants
 */

import { heroData } from '@/constants'

function Hero() {
  return (
    <section className="py-10 md:py-16">
      <div className="container text-center">
        <div className="max-w-screen-md mx-auto">
          <p className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10">
            {heroData.sectionSubtitle}
          </p>
          <h2>
            {heroData.sectionTitle}
            <span className="">{heroData.decoTitle}</span>
          </h2>
          <p className="">{heroData.sectionText}</p>
          <div className="">
            <Button>Start Free Trial</Button>
            <Button variant='ghost'>Watch Demo</Button>

          </div>
        </div>

        <div className="">
          <figure>
            <img src={heroBanner} width={1468} height={815} alt="AnalytiX dashboard" />
          </figure>
        </div>
      </div>
    </section>
  )
}


export default Hero