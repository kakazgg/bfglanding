import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Betting, Flipping, Gaming.',
    paragraph: 'The B.F.Gs consist of three distinct factions, The Bookies, The Flippers and the Gamers. Working together to bring the gold back to their caves!'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs fw-600 tt-u mb-8 text-color-primary">
                  Risk takers and cash makers
                  </div>
                <h3 className="mt-0 mb-12">
                <span className="specialelite features-split-special">The </span><span className="text-color-primary permanentmarker features-split-marker">Bookies.</span>
                  </h3>
                <p className="m-0">
                  The giants are ready to risk it all. Come join the giants on their journey from rags to riches!<br></br>are you a gaming fan? A sports fan? or even just a Solana lover. Whether you are passionate about one or all three, come join the giants and their fortune at the B.F.G's bookies.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  alpha masters
                  </div>
                <h3 className="mt-0 mb-12">
                <span className="specialelite features-split-special">The </span><span className="text-color-primary permanentmarker features-split-marker">Flippers.</span>
                  </h3>
                <p className="m-0">
                  Not a fan of flipping a coin? Maybe you prefer flipping NFT's. These giants take a more strategic approach with their money. Have your say in what the giants invest their gold into and in the reward cut of the profits. Who is going to be the grand alpha master?
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  adrenaline junkies
                  </div>
                <h3 className="mt-0 mb-12">
                <span className="specialelite features-split-special">The </span><span className="text-color-primary permanentmarker features-split-marker">Gamers.</span>
                  </h3>
                <p className="m-0">
                  The adrenaline junkies love to be the last giants standing. Whether in combat, brain power or natural skill, these giants will stop at no cost to win. The gamers will be able to compete in their favorite online games against one another to win some giant prizes.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;