import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
    return (
        <div className="flex footer-container">
            <div className="flex main-container footer-subcontainer">
                <div className="credit-container">
                    <span className="footer-title">gazorpasounds©</span> made by gazorpazorp85 for Edea
                </div>
                <div className="flex align-center social-icons-container">
                    <div className="flex social-icon-container">
                        <a href='https://www.facebook.com/karma.tova' target='blank'>
                            <FacebookIcon className="social-icon" />
                        </a>
                    </div>
                    <div className="flex social-icon-container">
                        <a href='https://github.com/gazorpazorp85' target='blank'>
                            <GitHubIcon className="github-icon" />
                        </a>
                    </div>
                    <div className="flex social-icon-container">
                        <a href='https://www.linkedin.com/in/paolo-groppi-6ba84117b/' target='blank'>
                            <LinkedInIcon className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}