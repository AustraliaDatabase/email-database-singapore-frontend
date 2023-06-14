import {
  Desktop,
  Wallet,
  Gift,
  Target,
  CircleWavyQuestion,
  TreeStructure,
  Briefcase,
  Envelope,
  Database,
  ShieldStar,
  ShoppingCartSimple,
  Info,
  PresentationChart,
  Copyright,
  IdentificationCard,
  ClockClockwise,
  ShieldCheck,
  AddressBook,
  Asterisk,
  ArrowRight,
} from "phosphor-react";
import Image from "next/image";

const HomeSeed = {
  floatingMenu: [
    {
      link: "#productType",
      label: "Buy List",
      icon: <ShoppingCartSimple size={24} />,
    },
    {
      link: "#why-us",
      label: "Why us?",
      icon: <CircleWavyQuestion size={24} />,
    },
    { link: "#source", label: "Source?", icon: <TreeStructure size={24} /> },
    { link: "#faqs", label: "F.A.Q", icon: <Info size={24} /> },
    { link: "#reviews", label: "Reviews", icon: <ShieldStar size={24} /> },
  ],
  banner: {
    caption: "Fuel Your Business with Our Quality Company Database",
    title: `2022 Accurate & Fresh <span className="text-highlight">USA Business Database Provider </span>`,
    description:
      "Our Company’s business lists, email lists, industry’s contact list, Job title’s database, Realtors, doctors, and many other databases are more than 95% accurate and regularly verified (all contacts – phone, email, fax, current Company, and office addresses are regularly verified). We validate our all of our contacts every two to three months.",
  },
  second_banner: {
    title: (
      <>
        Accurate Business Lists to{" "}
        <span className="text-highlight">Skyrocket Your ROI</span>
      </>
    ),
    description: (
      <>
        <p>
          Our company info database of business lists, email lists, and B2B
          lists is accurate and regularly verified (regular verification of all
          contacts – phone, email address, fax numbers, current company, and
          office addresses). We validate our business list databases every two
          to three months.
        </p>
        <p>
          We make sure each record is genuine by using different verification
          approaches, including end-to-end verification and cross-referencing.
        </p>
        <p className="mb-4">
          A dedicated team updates and monitors our databases regularly. That is
          to make sure that we remove outdated data and provide the latest info
          about the business of your interest.
        </p>
        <p className="mb-4">
          We guarantee 95% deliverability for all email databases listed for
          sale. Your marketing team is 95% sure that their emails will reach
          their target customer&apos;s inbox and their message is delivered and
          read.
        </p>
        <p className="mb-4">
          Remember to keep your bounce rate below 5%. Also, make sure to only
          send emails to highly engaged recipients with a high click rate and
          avoid a sudden increase in the volume of emails sent.
        </p>
      </>
    ),
  },
  solutionFactList: [
    {
      title: "Affordable Price",
      description:
        "B2B connections made through high quality and verified email lists available, at a budget-friendly price.",
      icon: <PresentationChart size={48} />,
    },
    {
      title: "Direct Contacts Only",
      description:
        "We provide direct email addresses for real contacts, avoiding generic addresses like contact@ or sales@.",
      icon: <Copyright size={48} />,
    },
    {
      title: "CRM Ready Files",
      description:
        "Download our lists as .csv/excel files for easy integration into your CRM and quick networking.",
      icon: <Wallet size={48} />,
    },
    {
      title: "Highest Accuracy",
      description:
        "Our databases are updated every three months for 96% accuracy, outperforming our competitors.",
      icon: <IdentificationCard size={48} />,
    },
    {
      title: "96% Email Delivery Guarantee",
      description:
        "2023 updated, fresh, and verified. Get free credits for bounced back contacts exceeding 4%.",
      icon: <Target size={48} />,
    },

    {
      title: "Premium Contact Database",
      description:
        "Every contact lists are included company,contact name ,direct email,title ,direct phone number and many more.",
      icon: <ClockClockwise size={48} />,
    },
    {
      title: "Unlimited Usage Rights",
      description:
        "Instantly own our data and lists upon purchase, with no extra fees or usage limits.",
      icon: <ShieldCheck size={48} />,
    },
    {
      title: "Free Updates for a Year",
      description:
        "Get one year of free updates from the purchase date, with no extra fees.",
      icon: <AddressBook size={48} />,
    },
  ],
  featureCards: [
    {
      title: "Premium Full Contacts",
      description:
        "Contact from every fields by Contact Name, email address , phone number, postal address,NAICS,SIC ,Industry and much more.",
      icon: <Desktop size={32} weight="duotone" />,
      circle: true,
    },
    {
      title: "Affordable Pricing",
      description:
        "Quality and Company lists enable businesses to make business connections for lowest price.",
      icon: <Wallet size={32} weight="duotone" />,
      circle: true,
    },
    {
      title: "1 year Free Updates",
      description:
        "You will get free updates for 1 year .We clean all our contacts every three month.",
      icon: <Gift size={32} weight="duotone" />,
      circle: true,
    },
    {
      title: "95% Email Deliverability Guaranteed ",
      description:
        "We guarantee 95% deliverability for all email databases listed for sale.",
      icon: <Target size={32} weight="duotone" />,
      circle: true,
    },
  ],
  actionCards: [
    {
      title: "46 Million United State Business Database",
      description:
        "2022 updated unique 46 million direct B2B contacts available with title,Company , phone ,fax number and etc.",
      icon: (
        <Image
          layout="fixed"
          width={50}
          height={50}
          src="/icon-1.png"
          alt="usa"
        />
      ),
      label: "View Details",
      link: "/list-of-all-us-companies",
      asTag: "div",
    },
    {
      title: "2 Million USA Realtors",
      description:
        "More than 96% Accurate unique 2 million realtors available with contact name,email ,phone , fax ,address , License number and etc.",
      icon: (
        <Image
          width={50}
          height={50}
          layout="fixed"
          src="/real-estate.png"
          alt="Real Estate"
        />
      ),
      label: "View Details",
      link: "/real-estate-agent-email-list",
      asTag: "div",
    },
    {
      title: "Database USA By Professions",
      description:
        "There are many databases available for varieties of professions. All are 2022 Updated and unique contacts.",
      icon: (
        <Image
          width={50}
          height={50}
          src="/businessman.png"
          layout="fixed"
          alt="Business Man"
        />
      ),
      label: "View Details",
      link: "/usa-job-titles",
      asTag: "h4",
    },
    {
      title: "Database by Industry Categories",
      description:
        "Industries such as Architects & Building designers , Backers , General Contractors & Home Builders ,Cryptocurrency and many more available.",
      icon: (
        <Image
          layout="fixed"
          width={50}
          height={50}
          src="/real-estate.png"
          alt="usa"
        />
      ),
      label: "View Details",
      link: "/special-databases",
      asTag: "div",
    },
    {
      title: "Worldwide Business Lists",
      description:
        "Global B2B lists available – Covered in Asia, Europe, Middle East, Australia & NZ, Africa, and South America.",
      icon: (
        <Image
          layout="fixed"
          width={50}
          height={50}
          src="/gear-1.png"
          alt="Settings"
        />
      ),
      onClick: () => {
        alert("Hi");
      },
      label: "View Details",
      link: "/other-countries",
      asTag: "div",
    },
    {
      title: "Global Consumer Emails",
      description:
        "Millions of Consumer emails are available worldwide – All are up to date and valid emails.",
      icon: (
        <Image
          width={50}
          layout="fixed"
          height={50}
          src="/email-marketing.png"
          alt="Email Marketing"
        />
      ),
      label: "View Details",
      link: "/consumer-emails",
      asTag: "div",
    },
  ],
  collapsibleList: [
    {
      title: "Valid and Unique Contacts",
      element: (
        <>
          While other providers selling many years old database with duplicate
          contacts .We are selling 2022 Updated VALID AND UNIQUE CONTACTS at
          lowest cost than any other providers on internet today and We are
          updating our database every two month.
        </>
      ),
    },
    {
      title: "Most Accurate Sources",
      element: (
        <>
          All business contacts were mined from wide variety of sources, such as
          : Business directories ,New business fillings , Daily utility
          connections , Press releases , Corporate websites and many other
          sources .
        </>
      ),
    },
    {
      title: "Million of Contacts at An Affordable Price",
      element: (
        <>
          We are Offering million of business contacts at a very cost effecting
          price for small businesses that can not afford our competitor’s price.
          Therefore you don’t need to pay thousands of dollars while you can
          purchase our businesses databases at an affordable price.
        </>
      ),
    },
    {
      title: "One Year Free Updates & Database Accuracy Guarantee",
      element: (
        <>
          <p>
            We offer updates on your listing for one year free of charge and
            update our listings every two to three months. Your business will
            not have an extra expense for such a privilege. If you cannot afford
            our competitor&apos;s price, you can always turn to us for a lower
            expense while you acquire better service. With our company database,
            you can reach your prospects directly to lead them into the sales
            funnel. Close your deals faster. In these pandemic days, cell phone
            calls and emails are the best ways to reach your prospects fast.
          </p>

          <p>
            We offer the best quality leads at cost-effective prices. With us,
            you have only three steps for success: identify your market, invest
            in a B2B leads database, and get results.
          </p>
        </>
      ),
    },
  ],
  collapsibleList_2: [
    {
      title: "Genuine leads",
      element: (
        <>
          <p>
            Acquiring verified B2B business leads lists generate a whole lot of
            sales. With these lists, you can reach your target audience without
            spending a huge amount of time and resources.
          </p>
          <p>
            To this end, we endeavor to provide you with genuine lead lists that
            can help you reach your desire prospects with your business&apos;s
            ideal persona at the lowest price in the industry.
          </p>
        </>
      ),
    },
    {
      title: "Million of Contacts than other providers at an affordable price",
      element: (
        <>
          <p>
            The goal is achievable for your business with our customized
            pricing. Buy your email list at an affordable price based on your
            budget and marketing targets.
          </p>
          <p>
            We provide a higher number of contacts than other providers offering
            lists at the same price. Also, we will update your company list
            database for one full year with no further expense on your part.
          </p>
        </>
      ),
    },
  ],
  sideTabList: [
    {
      title: "Business Data Solutions: Benefits of Buying Company Database",
      childElement: (
        <div>
          <p>
            Our United State business directory is a user-friendly directory. We
            categorize our lists, so you can easily find the most suitable
            businesses or customers to target. In terms of territories, we have
            listings under Cities, Counties, States, Zip Codes, etc. If you are
            targeting local markets, these are the easiest to use listings for
            your business.
          </p>
          <p>
            Check out our premium digital marketing list that includes data
            fields, such as contact names, email, phone, company name, SIC,
            NAICS, industry, and more.
          </p>
          <p>
            You can use these lists in different components of your marketing
            campaign:
          </p>
          <ul>
            <li>Email Marketing Campaign</li>
            <li>Telemarketing Campaign</li>
            <li>Direct Mail Campaign</li>
            <li>Campaigns via Consumer Mailing and Email Lists</li>
          </ul>
        </div>
      ),
    },
    {
      title:
        "Company Information Database that Boosts Your Email Database Marketing",
      childElement: (
        <div>
          <p>
            Power up your marketing with uscompanydata.com database listings!
            Today, marketing campaigns are not effective without email
            marketing. Despite the growing popularity of online approaches, such
            as social media and SEO, businesses cannot do away with email
            marketing altogether.
          </p>
          <p>
            The best part of email marketing is it allows you to have a
            personalized approach right from the start, and you have access to
            your target audience at the tip of your fingers. Your
            prospect&apos;s inbox is available for you to use as the
            communication channel for a more personalized messaging and
            marketing pitch.
          </p>
          <p>
            Even big businesses use email marketing. Facebook and Twitter use
            email marketing to bring their users back when they notice a lack of
            engagement in their platform. That strategy does not only allow an
            expression of genuine interest.
          </p>
          <p>
            For these giant online platforms, the strategy also works for
            regaining trust and providing value. If your past customers or
            visitors failed to reconnect with you, re-target them through an
            email that reminds them of their importance to you.
          </p>
        </div>
      ),
    },
    {
      title: "Company List Database Service that Goes the Extra Mile",
      childElement: (
        <div>
          <p>
            At uscompanydata.com, we put a premium on building strong
            relationships with customers. We will work with you through and
            through or until you see the results of your partnership with us. We
            understand you will not see results overnight. That is why we will
            continue working with you to identify leads that do not convert and
            why they do not convert.
          </p>
          <p>
            We can identify 98% of your target audience that does not convert.
            Then you can profile these people and plan how you can retarget them
            to achieve the best result.
          </p>
        </div>
      ),
    },
    {
      title: "Customized Company List Database",
      childElement: (
        <div>
          <p>
            Buying a company database for marketing can be challenging. You need
            to verify the authenticity and accuracy of the data set, which can
            prolong your search and make you waste resources.
          </p>
          <p>
            We can help you avoid such difficulty by providing you a sample data
            that match your targeting criterion.
          </p>
          <p>
            With our customer-focused services, we will not provide you a sample
            with random data. We will give you a customized set to give you an
            idea about what data you can get from us once you place an order.
          </p>
          <p>Customize your database based on these parameters:</p>
          <ul>
            <li>Company size</li>
            <li>Industry</li>
            <li>Job roles of decision-makers</li>
            <li>
              Technology that your target market is using (Shopify, WordPress,
              Magento, etc.). With our state-of-the-art software, you can
              seamlessly feed our listings into your existing platform.
            </li>
            <li>Location</li>
            <li>Niche categories (SaaS company, Fintech, etc.)</li>
            <li>
              Target customers that have raised or received funding recently
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Data-Driven Marketing Insights and Business Intelligence",
      childElement: (
        <div>
          <p>
            Strategizing is essential in marketing campaigns. So, you ask
            questions:
          </p>
          <ul>
            <li>What is my goal?</li>
            <li>Who is my target audience?</li>
            <li>How can I measure success?</li>
          </ul>
          <p>
            There is only one answer to all these questions: data. Use
            strategies backed up by data. And data is what we can provide you.
            And not just random data. We offer you a genuine and accurate
            database to help your team avoid launching a lackluster campaign.
          </p>
          <p>
            In addition to your updated list, we also help you with a market
            analysis to help you with your campaigns. For instance, we know that
            87% of online sales happen through desktops, and 62% of online
            buyers buy products through their mobile devices. That can give you
            an idea about where you can best engage your target email audience.
          </p>
          <p>
            We understand that company resources are often limited, so we try to
            help your marketing efforts by providing stats that matter to your
            campaigns. It is, after all, a partnership that we are building with
            our clients.
          </p>
        </div>
      ),
    },
  ],
  bottom_cards: [
    {
      icon: <Briefcase size={24} />,
      title: "Business Lists for Sale",
      element: (
        <p>
          At our USA Company Database Service, we offer the most extensive and
          updated business lists on our website. You can find the extensive
          business database in the business market as we totally understand that
          it is the current global economy. Here, on our website, we provide you
          the most comprehensive US Company Database lists. Our goal is to
          provide you the largest directory and complete business listings for
          your operational needs and to grow your business successfully.{" "}
        </p>
      ),
      asTag: "h3",
    },
    {
      icon: <Envelope size={24} />,
      title: "Email Lists",
      element: (
        <p>
          If you are looking for the best email contact details, then you are at
          the right place as we are the best email list provider in the USA, and
          you cannot find anything better than our list from any other provider.
          We are honored to say that we provide largest, complete, precise, and
          up-to-date direct email lists at a very reasonable price. <br />
          <br /> We offer thousands of email addresses that have been
          meticulously verified, and we guarantee you that we provide only
          reliable and up-to-date contact information where you cannot find any
          duplicate or bad emails on our lists. Also, we assure you that you
          cannot locate ‘no blank’ entries on our email lists.
        </p>
      ),
      asTag: "div",
    },
    {
      icon: <Database size={24} />,
      title: <>List of US Companies</>,
      element: (
        <>
          <p>
            No matter where your business is based, we will provide you the
            unique company email database where you can get reliable and
            up-to-date business database lists. You can take complete advantage
            of the various business marketing opportunities that are obtainable
            in the United States of America.
          </p>
          <p>
            Our US business directory is always available at a very affordable
            price, and you can always expect the updated and precise information
            on our website. Our extensive database provides details on a large
            range of businesses throughout the US, which could offer you with
            probable marketing opportunities.{" "}
          </p>
        </>
      ),
      asTag: "h3",
    },
  ],
  jobTitleAndJobLevelsTopic: {
    title: `Buy Lead Lists by Profession`,
    description: (
      <p>
        EmailDatas services allow users to access a business database
        containing thousands of entries. Our database covers hundreds of
        job-specific titles. Thus, you can have a successful marketing campaign
        because we can provide you with a highly targeted list.{" "}
        <span>
          <a href="#">
            View All Job Titles <ArrowRight size={24} />
          </a>
        </span>
      </p>
    ),
    list: [
      {
        title: `C - LEVEL`,
        content: (
          <div>
            <h5 className="mb-4">
              <a href="#">
                Accurate & Trustworthy C-level Executives Email List
              </a>{" "}
            </h5>
            <p>
              We at EmailDatas provide C-level executive data so that you
              have more information to use when emailing these people.
              Parameters in our C-level listing include:
            </p>
            <p>
              <div>
                <Asterisk /> <span>The industry they belong to</span>
              </div>
              <div>
                <Asterisk />{" "}
                <span>Company size (large, midsized, or young startup)</span>
              </div>
              <div>
                <Asterisk /> <span>Location</span>
              </div>
              <div>
                <Asterisk />{" "}
                <span>
                  Social handles so you can connect with them socially (LinkedIn
                  )
                </span>
              </div>
              <div>
                <Asterisk /> <span>Verified email and direct number</span>
              </div>
              <div>
                <Asterisk /> <span>Number of Employees</span>
              </div>
              <div>
                <Asterisk /> <span>Location (Zip Code , State, and City)</span>
              </div>
            </p>
            <p>
              With your highly targeted listing, you can easily cut through the
              red tape and speak directly to C-level executives who are likely
              the decision-makers in their companies.
            </p>
            <p>
              We can also provide you with an extensive list of highly
              sought-after contacts in one downloadable database that you can
              easily integrate into your CRM and start using today.
            </p>
            <p>
              It is a Herculean task for businesses to access accurate
              information about organizational decision-makers.
            </p>
            <p>
              Fortunately, EmailDatas is here to provide the information you
              need on a silver platter. Our expert researchers will collate,
              verify, and segment the data according to your business and
              campaign requirements.
            </p>
            <p>
              Get connected to C-Suite executives from IT, telecommunication,
              banking and finance, real estate, healthcare, engineering, mining,
              and more with our reliable B2B databases!
            </p>
          </div>
        ),
      },
      {
        title: `VP - LEVEL`,
        content: (
          <div>
            <h5 className="mb-4">
              <a href="#">
                Get Accurate VP Email Lists for Your B2b Campaigns.
              </a>{" "}
            </h5>
            <p>
              With the help of robust data solutions from EmailDatas, you can
              network with most company vice presidents all over the US and
              across the world. Build connections with people who are second in
              command in leading companies across industries.
            </p>
            <p>
              We can help you target these highly influential people and
              establish a connection with them. Our VP
              <b>email marketing lists for sale</b> are the best resource that
              can help boost your data-driven campaigns with their relevant,
              accurate, and valid contact details.
            </p>
            <p>
              Because we can provide you direct access to your target VP
              prospects via email, mail address, or phone, you can skip
              lower-level executives that can hinder you from getting connected
              to decision-makers. You go straight to top-tier executives and
              close a deal with them fast.
            </p>
            <p>
              As regards reliability, we can vouch for our VP email and contact
              lists that are over a 96% email accuracy rate. We make thousands
              of calls and send millions of verification emails to keep our data
              error-free. We also make sure that our database does contain
              redundant entries.
            </p>
            <p>
              Further, we offer customizable VP listing, although you can also
              use it in its prepackaged format. You can easily segment entries
              based on your requirements – company revenue, geo-location, NAICS
              code, SIC code, etc.
            </p>
          </div>
        ),
      },
      {
        title: `DIRECTOR LEVEL`,
        content: (
          <div>
            <h5 className="mb-4">
              <a href="#">
                Valid Director Contacts Email List to increase your sales
              </a>{" "}
            </h5>
            <p>
              Purchase email lists of directors from top companies in different
              industries and localities from EmailDatas. We can make sure
              that you will be sending emails to valid director email addresses
              using a cleaned list for optimal deliverability.
            </p>
            <p>
              Directly engaging directors with your messages is the best way to
              shorten the sales cycle. You will engage with directors to close
              lucrative deals, sign contracts, earn streaks of profits, and beat
              the competition.
            </p>
            <p>
              Before you hire a director email list provider, make sure to check
              first for reviews, credibility, service history, rating, and
              reviews of the companies you are considering.
            </p>
            <p>
              At EmailDatas, we will provide you with a sample listing of
              company directors for free, so you can have a taste of our service
              and check how the system works before paying anything.
            </p>
            <p>
              The sample listing can show you if your requirements have been met
              and prove how effective our services can be in the long run.
            </p>
            <p>
              Ensure that you read our service agreement and check the details
              about refund and replacement policies before buying a directors’
              list from EmailDatas. Our service includes free editing of the
              list we will provide you based on the performance of your email or
              phone marketing campaigns targeting company directors.
            </p>
          </div>
        ),
      },
      {
        title: `MANAGER LEVEL`,
        content: (
          <div>
            <h6 className="mb-4" style={{ fontSize: "1.25rem" }}>
              <a href="#">Buy Managers Lead List to grow your business</a>{" "}
            </h6>
            <p>
              Are you targeting company managers with your campaigns? Buy email
              database from EmailDatas to get manager details, such as
              emails, phone numbers, office addresses, and departments.
            </p>
            <p>
              High-level managers are in charge of departments and are under
              busier top executives. As such, they can also make choices about
              the profitability of the department they head.
            </p>
            <p>
              On the other hand, low-level managers that run stores or outlets
              also make decisions for the shops they operate. They can influence
              whole stores, departments, or any areas within their company.
            </p>
            <p>
              You sure want to get connected to these influential people in
              their company. You want to introduce yourself to them and start
              talking business with them.
            </p>
            <p>
              Fortunately, EmailDatas has quality pre-built manager listings
              that you can download and use right away. Whether it is a list of
              marketing managers, brand managers, or digital marketing managers,
              we can provide you with an accurate, updated, and reliable
              database of the managers that you are looking for.
            </p>
            <p>
              Our accurate and verified database can help you get in touch with
              managers looking to grow their areas of operation. With our
              downloadable managers’ list, you can network and foster business
              relations with them.
            </p>
            <p>
              Surfing the internet or LinkedIn cannot give you fast information
              about EmailDatas listings<span>&#39;</span> general managers.
              The ideal way to do it is to acquire a permission-based manager
              list from us to get your products and solutions in front of your
              target audience fast.
            </p>
          </div>
        ),
      },
      {
        title: `STAFF LEVEL`,
        content: (
          <div>
            <div
              className="mb-4"
              style={{ fontSize: "1.25rem", fontWeight: 600 }}
            >
              <a href="#">
                Start your marketing campaign with Staff Level Email List
              </a>{" "}
            </div>
            <p>
              EmailDatas also has a collection of contact information of
              people at the staff level of companies in the US and abroad. We
              feel that these people are essential in influencing
              decision-makers who need to come up with effective solutions for
              challenges companies are facing.
            </p>
            <p>
              Nowadays, companies involve their staff in decision-making, as it
              is a healthy practice for improving performance and relationships
              in the workplace.
            </p>
            <p>
              Employees who can share their opinions in work matters feel that
              their contribution is valued. The privilege to be involved in
              decision-making can help build a sense of teamwork and improve
              relationships among staff members.
            </p>
            <p>
              Thus, EmailDatas offers <b>email lists for sales</b> containing
              emails of staff working at the lower tiers of organizations.
              Together with our listing of CEOs, managers, vice presidents, use
              our staff listing to increase your influence in the companies you
              are targeting.
            </p>
            <p>
              With this list, you can connect with staff members by inboxing a
              personalized message or setting up cold calls. The more people you
              get connected to, the higher is the chance of getting noticed and
              scheduling meetings.
            </p>
            <p>
              With the comprehensive data that our staff listings offer, you can
              draw the attention of your desired audience using email and mail
              marketing campaigns. In addition, you can engage with them through
              social media platforms.
            </p>
          </div>
        ),
      },
    ],
  },
  listByIndustryTopic: {
    title: `Buy email lists by industry`,
    description: (
      <>
        <p>
          EmailDatas covers all industry-specific B2B contacts. Connect with
          the right people through our verified and accurate mailing lists and
          market your products to relevant industries.
        </p>
        <p>
          All industries are covered in construction, hospitality, marketing,
          education, finance, manufacturing, and more. When you buy a targeted
          email list from us, you are assured of a premium, industry-specified
          marketing, and sales leads. Our databases are very easy to use and do
          not require advanced computer skills and experience.
        </p>
        <p>
          The secret to effective B2B marketing is getting the correct business
          data to ensure that you have the right prospects to target, whether by
          direct mail, telemarketing, or electronic mails.
          <span>
            <a href="#">
              View All Job Titles <ArrowRight size={24} />
            </a>
          </span>
        </p>
      </>
    ),
  },
  listByLocationTopic: {
    title: `USA Quality Email List Based on Location`,
    description: (
      <>
        <p>
          Researching everything you need to know about your prospective clients
          will mean a lot of effort to exert and time to spend. It will be an
          endless combing of the web to get contact details.
        </p>
        <p>
          Here at EmailDatas, you can skip such a difficult task. Aside from
          the industry-specific listings, you may also opt to buy lead
          lists based on locations.
        </p>
        <p>
          If a location-based list can help you better, we can provide you with
          USA listings by zip codes, cities, or states. Such a listing will
          allow you to connect with businesses in the same area in one marketing
          campaign.
        </p>
      </>
    ),

    list: [
      {
        title: `USA Email list by state`,
        content: (
          <div>
            <p>
              We provide email and mail lists covering all the states in the
              USA. If you need to target New York companies, you can download
              our wide-ranging directory of professionals located in this state.
            </p>
            <p>
              Such a list will help you put your product in front of your target
              audience in New York. Download a pre-built New York list and have
              all the contact information your business needs from this state to
              succeed.
            </p>
            <p>
              Likewise, for businesses that target the state of Washington, our
              Washington listing will open new doors of business opportunities
              for you. EmailDatas verifies our Washington B2B listing
              regularly, so our customers can always have reliable contact
              details with a high level of deliverability and high accuracy of
              contact information.
            </p>
            <p>
              Our system allows your team to work instantly and get started
              making connections right away. We can send you the list you need
              in a matter of time, and you can integrate it into your CRM
              application hassle-free.
              <a href="/pre-made-list/states">View All states</a>
            </p>
          </div>
        ),
      },
      {
        title: `Email List By Cities in USA`,
        content: (
          <div>
            <p>
              With our email and mailing lists organized by cities, you have a
              great way to keep the sales pipeline flowing. If you can
              categorize your market by city, you will know the demographics of
              businesses in that area and their needs.
            </p>
            <p>
              Such a strategy can save your business time and money. With our
              business listing by cities, you will have the right audience to
              target without wasting resources on businesses that no longer
              operate or addresses that are listed incorrectly.
            </p>
            <p>
              With our city-based business listings, you will be able to
              identify decision-makers from thousands of verified B2B companies,
              set filters to identify the best accounts, and connect with
              hundreds of multiple account holders.
            </p>
            <p>
              You would want a list that is highly targeted to obtain from us.
              Make sure that you provide us with your ideal customer persona. We
              will give you the businesses that fit that persona, whether
              located in New York, Los Angeles, or Washington DC.
              <a href="/pre-made-list/cities">View All Cities</a>
            </p>
          </div>
        ),
      },
      {
        title: `US zip codes`,
        content: (
          <div>
            <p>
              Designing a direct mail campaign using a zip code listing will
              allow you to zero in on a group of businesses with one thing in
              common: they are located near one another. EmailDatas listings
              can help you get connected with every business in one zip code and
              can even customize your list using your target demographics.
            </p>
            <p>
              With our zip-code-based mailing lists, you will not chase
              incorrect or incomplete lists. Our database will allow you to
              reach the perfect audience with many search selections to target
              the right people for all your research, marketing, and sales
              efforts.
            </p>
            <p>
              Suggested users of zip code mailings are businesses that target
              the following customers:
            </p>
            <p>
              <div>
                <Asterisk /> <span>Hospitals and clinics</span>
              </div>
              <div>
                <Asterisk /> <span>Cable and phone companies</span>
              </div>
              <div>
                <Asterisk /> <span>Roofing and phone contractors</span>
              </div>
              <div>
                <Asterisk /> <span>Home remodelers</span>
              </div>
              <div>
                <Asterisk /> <span>Landscaping services</span>
              </div>
              <div>
                <Asterisk /> <span>Security companies</span>
              </div>
            </p>
            <p>
              These are examples of listings that we provide for every business
              that wants a better return on investment. Customize your message
              to the right people to help you improve your business’s ROI.
              <span>
                <a href="/build-custom-list">
                  Click Here to Build Email List by Zip Code
                </a>
              </span>
            </p>
          </div>
        ),
      },
    ],
  },
  internationalListTopic: {
    title: `International Email List`,
    description: (
      <>
        <p>
          To sell in the US, you will need our comprehensive American listings
          that offer precise information for successful marketing on American
          soil. However, our services can help you market beyond the borders of
          America and reach prospects in different countries and continents.
        </p>
        <p>
          Selling products and services across millions of miles is easier now
          than ever. With our downloadable listings, you can market your
          products abroad with contact details that you need – names, job
          titles, postal addresses, phone numbers, email addresses, and many
          more.
        </p>
        <p>
          You can buy an email list of all professionals and B2B businesses
          operating in Canada if that is the country you are targeting. We can
          make it easy for you to communicate with business leaders in the True
          North with all the trusted information you need to boost your
          campaign.
        </p>
        <p>
          Similarly, you can get all the information you need if your business
          is targeting Australian businesses, African businesses, and leading
          companies across Asia. Buy b2b email list that can help you reach out
          across seas to new prospects in other countries today!
          <a href="/pre-made-list/international">View All countries</a>
        </p>
      </>
    ),
  },
};

export default HomeSeed;
