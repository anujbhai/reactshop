import * as React from "react";

interface ITabsProps {
  headings: string[];
}

interface ITabsState {
  activeHeading: string;
}

class Tabs extends React.Component<ITabsProps, ITabsState> {
  public constructor(props: ITabsProps) {
    super(props);

    this.state = {
      activeHeading: this.props.headings && this.props.headings.length > 0 ? this.props.headings[0] : ""
    };
  }

  private handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const heading: string = li.textContent ? li.textContent : "";

    this.setState({ activeHeading: heading });
  };

  public render() {
    return (
      <ul className="tabs">
      {
        this.props.headings.map(heading => (
          <li
            className={
              heading === this.state.activeHeading
              ? "active"
              : ""
            }
            onClick={ this.handleTabClick }
          >{ heading }</li>
        ))
      }
      </ul>
    );
  }
}

export default Tabs;
