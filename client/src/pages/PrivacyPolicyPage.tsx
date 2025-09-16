// src/pages/PrivacyPolicyPage.tsx

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-800 py-20 text-gray-300">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last Updated: September 5, 2025</p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">1. Information We Collect</h2>
            <p>We collect the following types of information to provide and improve our services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Personal Information:</strong> This includes your name, email address, phone number, company name, and other contact details you provide when you fill out our contact form, subscribe to our newsletter, or engage with our services.</li>
              <li><strong>Usage Data:</strong> We automatically collect information about how you interact with our website. This may include your IP address, browser type, operating system, pages viewed, and browsing behavior.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">2. How We Use Your Information</h2>
            <p>The information we collect is used for the following purposes:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>To provide, maintain, and improve our digital marketing services.</li>
              <li>To respond to your inquiries, requests, and support needs.</li>
              <li>To send you marketing communications, newsletters, and promotional offers that may be relevant to you.</li>
              <li>To analyze website usage and trends to enhance user experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">3. Sharing Your Information</h2>
            <p>We are committed to protecting your privacy. We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Service Providers:</strong> We may share your information with trusted third-party vendors who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">4. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">5. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience and gather data about site traffic and interaction. Cookies are small data files stored on your device's hard drive. You can choose to disable cookies through your individual browser options.</p>
          </div>
            
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">6. Third-Party Links</h2>
            <p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access, correct, or request the deletion of your personal information.</li>
              <li>Withdraw your consent for our use of your data.</li>
              <li>Object to the processing of your data for marketing purposes.</li>
            </ul>
            <p className="mt-2">To exercise these rights, please contact us at support@adinspire.com.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. We advise you to review this Privacy Policy periodically for any changes. Your continued use of the website after any modifications signifies your acceptance of the new policy.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">9. Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy, you may contact us using the information below:</p>
            <p className="mt-2">
                <strong>ADINSPIRE</strong><br/>
                support@adinspire.com
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}