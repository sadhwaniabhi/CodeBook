import { useState } from "react"

export const Testimonial = () => {
  const [isActive , setIsActive ] = useState(false);
  
  const handleClick = (Event) => {
    console.log();
  }

  

  return (
    <div className="border border-gray-700 rounded p-4">
      <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        <p id="accordion-flush-heading-1">
          <button onClick={() => handleClick()} type="button" className="flex items-center justify-between w-full py-5 text-xl rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
            <span>Why should I use CodeBook?</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </p>
        <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi, vero voluptates voluptate placeat maxime sequi delectus, odit repellendus nobis cumque, reiciendis qui ratione nisi minus blanditiis nemo corporis non. Dolor quaerat laudantium enim consequatur natus explicabo voluptate, ex excepturi dolorem sit quam, voluptatibus odio voluptas numquam! Alias, vitae, dignissimos a architecto reprehenderit ducimus facere perspiciatis molestiae, odit tenetur placeat pariatur iure! Commodi quam sequi reiciendis suscipit ex accusamus velit expedita et repudiandae placeat quae beatae sapiente necessitatibus quidem nihil nostrum aspernatur cupiditate vitae modi, eius corporis saepe sed eum. Obcaecati commodi earum ab iste.</p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-2">
          <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
            <span>Can I access my eBook on mobile?</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus distinctio impedit ducimus ad modi voluptatum! Pariatur earum voluptas ab, optio vero nesciunt tempora, beatae delectus at reprehenderit, assumenda suscipit atque iusto. Suscipit obcaecati delectus nisi adipisci ipsa, laudantium atque, consequuntur nihil dignissimos aspernatur iure provident fuga labore quidem porro corrupti dolores tempore molestiae commodi impedit. Totam quam omnis a quae recusandae nobis numquam libero, veniam rem exercitationem illum excepturi.</p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-3">
          <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
            <span>Do you offer refunds?</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nulla sint amet cupiditate, explicabo neque sit cumque ut, fugit quod, ipsam eligendi doloremque voluptates blanditiis sequi repudiandae ipsa excepturi dicta.</p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-3">
          <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
            <span>Do you support international payments?</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, minus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
