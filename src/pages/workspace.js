import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

import Comparison from '../components/Comparison';

import DsAlert from '../components/DsAlert';
import DsBreadcrumb from '../components/DsBreadcrumb';
import DsButton from '../components/DsButton';
import DsCard from '../components/DsCard';
import DsMenu from '../components/DsMenu';
import DsNav from '../components/DsNav';
import DsPagination from '../components/DsPagination';

export default class IndexPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      someTrueValue: true,
      someFalseValue: false,
      breadcrumbItems: [
        { href: '/', text: 'PF Next' },
        { href: '/components', text: 'components' },
        { href: '/examples', text: 'examples' },
        { href: '/layouts', text: 'layouts' }
      ],
      menuItems: [
        { href: '/', text: 'PF Next' },
        {
          href: '/general',
          text: 'general',
          children: [
            {
              href: '/general/dashboard',
              text: 'dashboard'
            },
            {
              href: '/general/settings',
              text: 'settings'
            }
          ]
        },
        {
          href: '/administration',
          text: 'administration',
          children: [
            {
              href: '/administration/teams',
              text: 'teams'
            },
            {
              href: '/administration/customers',
              text: 'customers'
            }
          ]
        }
      ],
      navItems: [
        { href: '/', text: 'PF Next' },
        { href: '/components', text: 'components' },
        { href: '/examples', text: 'examples' },
        { href: '/layouts', text: 'layouts' }
      ],
      paginationItems: [
        { href: '/home1', text: 'PF Next' },
        { href: '/components1', text: 'components' },
        { href: '/examples1', text: 'examples' },
        { href: '/layouts1', text: 'layouts' },
        { href: '/home2', text: 'PF Next' },
        { href: '/components2', text: 'components' },
        { href: '/examples2', text: 'examples' },
        { href: '/layouts2', text: 'layouts' },
        { href: '/home3', text: 'PF Next' },
        { href: '/components3', text: 'components' },
        { href: '/examples3', text: 'examples' },
        { href: '/layouts3', text: 'layouts' },
        { href: '/home4', text: 'PF Next' },
        { href: '/components4', text: 'components' },
        { href: '/examples4', text: 'examples' },
        { href: '/layouts4', text: 'layouts' },
        { href: '/home5', text: 'PF Next' },
        { href: '/components5', text: 'components' },
        { href: '/examples5', text: 'examples' },
        { href: '/layouts5', text: 'layouts' },
      ],
    };
  }

  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    // const { edges: posts } = data.allMarkdownRemark;

    return (
      <section>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          <section className="comparisons">
            <header className="comparisons__header">
              <h1>Comparisons</h1>
            </header>

            <div className="comparisons__body">


              {/* Alert Comparison */}
              <Comparison title="Alerts">
                <DsAlert>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae, eligendi nihil alias culpa dignissimos nulla illum laboriosam cumque! Velit commodi fugit quia quibusdam omnis delectus inventore qui, deleniti! Vel.</p>
                </DsAlert>
                <DsAlert is-primary={this.state.someTrueValue}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae, eligendi nihil alias culpa dignissimos nulla illum laboriosam cumque! Velit commodi fugit quia quibusdam omnis delectus inventore qui, deleniti! Vel.</p>
                </DsAlert>
                <DsAlert is-secondary={this.state.someTrueValue}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae, eligendi nihil alias culpa dignissimos nulla illum laboriosam cumque! Velit commodi fugit quia quibusdam omnis delectus inventore qui, deleniti! Vel.</p>
                </DsAlert>
                <DsAlert is-success={this.state.someTrueValue}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae, eligendi nihil alias culpa dignissimos nulla illum laboriosam cumque! Velit commodi fugit quia quibusdam omnis delectus inventore qui, deleniti! Vel.</p>
                </DsAlert>
                <DsAlert is-danger={this.state.someTrueValue}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae, eligendi nihil alias culpa dignissimos nulla illum laboriosam cumque! Velit commodi fugit quia quibusdam omnis delectus inventore qui, deleniti! Vel.</p>
                </DsAlert>
                <DsAlert is-warning={this.state.someTrueValue}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae, eligendi nihil alias culpa dignissimos nulla illum laboriosam cumque! Velit commodi fugit quia quibusdam omnis delectus inventore qui, deleniti! Vel.</p>
                </DsAlert>
                <DsAlert is-info={this.state.someTrueValue}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae, eligendi nihil alias culpa dignissimos nulla illum laboriosam cumque! Velit commodi fugit quia quibusdam omnis delectus inventore qui, deleniti! Vel.</p>
                </DsAlert>
                <DsAlert is-light={this.state.someTrueValue}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae, eligendi nihil alias culpa dignissimos nulla illum laboriosam cumque! Velit commodi fugit quia quibusdam omnis delectus inventore qui, deleniti! Vel.</p>
                </DsAlert>
                <DsAlert is-dark={this.state.someTrueValue}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae, eligendi nihil alias culpa dignissimos nulla illum laboriosam cumque! Velit commodi fugit quia quibusdam omnis delectus inventore qui, deleniti! Vel.</p>
                </DsAlert>
              </Comparison>


              {/* Breadcrumb Comparison */}
              <Comparison title="Breadcrumbs">
                <DsBreadcrumb items={this.state.breadcrumbItems} />
              </Comparison>


              {/* Button Comparison */}
              <Comparison title="Buttons">
                <div><DsButton>Example</DsButton></div>
                <div><DsButton is-primary={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-small={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-large={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-secondary={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-success={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-info={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-warning={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-danger={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-light={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-disabled={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-dark={this.state.someTrueValue}>Example</DsButton></div>
                <div><DsButton is-focus={this.state.someTrueValue}>Example</DsButton></div>
              </Comparison>


              {/* Card Comparison */}
              <Comparison title="Cards">
                <DsCard>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae, eligendi nihil alias culpa dignissimos nulla illum laboriosam cumque! Velit commodi fugit quia quibusdam omnis delectus inventore qui, deleniti! Vel.</p>
                </DsCard>
              </Comparison>


              {/* Menu Comparison */}
              <Comparison title="Menus">
                <DsMenu items={this.state.menuItems} />
              </Comparison>


              {/* Nav Comparison */}
              <Comparison title="Navs">
                <DsNav items={this.state.navItems} />
              </Comparison>


              {/* Pagination Comparison */}
              <Comparison title="Pagination">
                <DsPagination items={this.state.paginationItems} />
              </Comparison>


            </div>
          </section>
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
