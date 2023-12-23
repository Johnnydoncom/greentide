import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Tailwind,
    Text,
    Row,
    Column
} from '@react-email/components';


interface EmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    country: string;
}

 const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, phone,  company, country, message}) => {

    const previewText = `New contact submission by 🚀${name}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className='bg-white my-auto mx-auto font-sans'>
                    <Container className='my-[20px] mx-auto p-[20px] max-w-4xl'>
                        <Heading className='text-black text-[20px] font-normal text-left'>
                            <strong>Hello {process.env.APP_NAME},</strong>
                        </Heading>
                        <Row>
                            <Column>Name: {name}</Column>
                        </Row>
                        <Row>
                            <Column>Email: {email}</Column>
                        </Row>
                        <Row>
                            <Column>Phone: {phone}</Column>
                        </Row>
                        <Row>
                            <Column>Company: {company}</Column>
                        </Row>
                        <Row>
                            <Column>Country: {country}</Column>
                        </Row>
                        <Hr className='my-[16px] mx-0 w-full' />
                        <Text className='text-[#666666] text-[12px]'>
                            {message}
                        </Text>

                        <Text className='text-[#666666] text-[12px]'>
                            This email was sent to you from {process.env.APP_NAME}.✨
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailTemplate;


