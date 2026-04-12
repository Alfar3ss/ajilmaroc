async function test() {
  try {
    const { Resend } = await import('resend');
    
    const apiKey = 're_XBbfYkKv_AaK64P8Fbc72Un9Xpm55bzmN';
    const senderEmail = 'onboarding@resend.dev';
    const testEmail = 'alf4r3ss@gmail.com';

    const resend = new Resend(apiKey);

    console.log('Sending test email...');
    console.log(`From: ${senderEmail}`);
    console.log(`To: ${testEmail}`);
    
    const result = await resend.emails.send({
      from: senderEmail,
      to: testEmail,
      subject: 'Test Email from AjilMaroc',
      html: '<p>✅ Email test successful! Your Resend configuration is working.</p>',
    });

    console.log('\n✅ Email sent successfully!');
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('\n❌ Email sending failed:');
    console.error(error);
  }
}

test();
