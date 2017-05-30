/**
 * Created by danielhollcraft on 4/8/17.
 */
import React, {
  PropTypes,
} from 'react';

import Helmet from "react-helmet"
import {Col, Row, Grid} from 'react-bootstrap'
import { config } from 'config'
import {Link} from 'react-router'

import {
  ProfileHeader,
  Background,
  CTAButton
} from '../components'

import './index.scss'

const Index = ({route}) => {

  const introduction = route.pages.find(p => p.path === '/introduction/').data.body;
  return (
    <div>
      <Helmet
        title={config.siteTitle}
        meta={[
          {"name": "description", "content": "Blog"},
          {"name": "keywords", "content": "sample, something"},
        ]}
      />
      <Background/>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} >
            <ProfileHeader/>
            <div className="panel">
              <div dangerouslySetInnerHTML={{__html: introduction}}/>
              <div className="panel-footer">
                <CTAButton type="success"/>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;
