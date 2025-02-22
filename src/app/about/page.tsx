import HeaderTextComponent from '@/components/atoms/HeaderTextComponent'
import UIWrapper from '@/components/atoms/UIWrapper'
import { AboutHero } from '@/components/Hero'
import { TestimonialCardTwo } from '@/components/Testimonial'
import UIMapperComponent from '@/components/UIMapperComponent'
import { aboutTestimonials } from '@/data/AboutTestimonials'
import { achievements } from '@/data/achievements'
import { values } from '@/data/values'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <>
      <AboutHero />
      <div className="space-y-6">
        <UIWrapper className='flex flex-col md:flex-row md:items-end gap-4 md:gap-6 py-14'>
          <div className="md:w-5/6">
            <HeaderTextComponent
              title='our values'
              description='Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'
              button={null}
            />
          </div>

          <div className="border border-border p-4 rounded-lg gap-4 grid grid-cols-2 grid-rows-2 md-w-1/6">
            {values.map((item, index) => (
              <div className="space-y-2 bg-background-grey rounded-lg p-4" key={index}>
                <div className="flex items-center gap-4">
                  <div className="size-10 overflow-hidden rounded-full p-2 border border-primary flex items-center justify-center">
                    <Image src={item.image} alt={item.title} width={100} height={100} className='' />
                  </div>
                  <h2 className="leading-[150%] font-semibold text-xl capitalize">{item.title}</h2>
                </div>
                <p className="text-sm md:text-base font-medium leading-[150%] text-white/60 line-clamp3">{item.description}</p>
              </div>
            ))}
          </div>
        </UIWrapper>

        <UIWrapper className='space-y-6'>
          <HeaderTextComponent
            title='our achievements'
            description='Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'
            button={null}
          />

          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {achievements.map((item, index) => (
              <div className="p-4 lg:p-6 border border-border rounded-lg flex-1 space-y-4" key={index}>
                <h2 className="leading-[150%] font-semibold text-xl capitalize md:text-2xl">{item.title}</h2>
                <p className="text-sm md:text-base font-medium leading-[150%] text-white/60 line-clamp3">{item.description}</p>
              </div>
            ))}
          </div>
        </UIWrapper>

        <UIMapperComponent
          title="our valued clients"
          description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
          button={null}
          Component={TestimonialCardTwo}
          data={aboutTestimonials}
        />
      </div>
    </>
  )
}
