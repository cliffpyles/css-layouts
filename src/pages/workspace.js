import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

import Comparison from '../components/Comparison';

import DsAlert from '../components/DsAlert';
import DsBreadcrumb from '../components/DsBreadcrumb';
import DsButton from '../components/DsButton';
import DsCard from '../components/DsCard';
import DsModal from '../components/DsModal';
import DsMenu from '../components/DsMenu';
import DsNav from '../components/DsNav';
import DsPagination from '../components/DsPagination';

import data from '../data';

export default class IndexPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = data;
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
      <section className="workspace">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="workspace__toolbar">
          <h3 className="workspace_section-heading">Workspace Settings</h3>
          <ul>

          </ul>
        </div>
        <div className="workspace__body">
          <h2 className="workspace_page-heading">Workspace</h2>
          <div className="comparisons">
            <header className="comparisons__header">
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

              {/* Modal Comparison */}
              <Comparison title="Modals">
                <button onClick={() => {this.setState({modalIsActive: true})}}>Toggle Modal</button>
                <DsModal is-active={this.state.modalIsActive} />
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
          </div>
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
