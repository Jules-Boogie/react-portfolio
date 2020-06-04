import React from 'react';
import { Image } from 'react-bootstrap'



function aboutPage() {

    return (
        <div className="container">
            <h2><strong>About Juliet</strong></h2>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="../../public/assets/IMG_1878.JPG" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../public/assets/IMG_1878.JPG" rounded />
                    </Col>
                </Row>
            </Container>
            <h1 class="name"><strong>Juliet George</strong></h1>
            <h1 class="profession">Full Stack Developer</h1>
            <h2>&hearts;</h2>

            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-lg-8">
                    <p className="aboutParagraph"> I was born in the south of Nigeria.
                    I was raised by my grandparents who emphasized the importance of science and technology
                    in the lives. My grandfather would buy the newest computers and show me how to you them.
                    This was how my love for computers began. My first device was a Samsung SPH A680,
                    I cherished my phone but also used it to take pictures and play video games.
                    </p>

                    <p className="aboutParagraph">
                        I am looking forward to starting out my career as software engineer.
                        I have lived in San Francisco for two years and worked as a Test engineer and
                        IT Engineer. I love living and working in the city. My favorite thing to do is checking out
                        restaurants in North Beach with my friends.
                        </p>
                </div>

            </div>
        </div>




    )




}

export default aboutPage;