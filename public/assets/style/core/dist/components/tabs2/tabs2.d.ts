import * as React from "react";
import { AbstractComponent } from "../../common/abstractComponent";
import { IProps } from "../../common/props";
import { Tab2, TabId } from "./tab2";
export declare const Expander: React.SFC<{}>;
export interface ITabs2Props extends IProps {
    /**
     * Whether the selected tab indicator should animate its movement.
     * @default true
     */
    animate?: boolean;
    /**
     * Initial selected tab `id`, for uncontrolled usage.
     * Note that this prop refers only to `<Tab>` children; other types of elements are ignored.
     * @default first tab
     */
    defaultSelectedTabId?: TabId;
    /**
     * Unique identifier for this `Tabs` container. This will be combined with the `id` of each
     * `Tab` child to generate ARIA accessibility attributes. IDs are required and should be
     * unique on the page to support server-side rendering.
     */
    id: TabId;
    /**
     * Whether inactive tab panels should be removed from the DOM and unmounted in React.
     * This can be a performance enhancement when rendering many complex panels, but requires
     * careful support for unmounting and remounting.
     * @default false
     */
    renderActiveTabPanelOnly?: boolean;
    /**
     * Selected tab `id`, for controlled usage.
     * Providing this prop will put the component in controlled mode.
     * Unknown ids will result in empty selection (no errors).
     */
    selectedTabId?: TabId;
    /**
     * Whether to show tabs stacked vertically on the left side.
     * @default false
     */
    vertical?: boolean;
    /**
     * A callback function that is invoked when a tab in the tab list is clicked.
     */
    onChange?(newTabId: TabId, prevTabId: TabId): void;
}
export interface ITabs2State {
    indicatorWrapperStyle?: React.CSSProperties;
    selectedTabId?: TabId;
}
export declare class Tabs2 extends AbstractComponent<ITabs2Props, ITabs2State> {
    /** Insert a `Tabs2.Expander` between any two children to right-align all subsequent children. */
    static Expander: React.StatelessComponent<{}>;
    static Tab: typeof Tab2;
    static defaultProps: Partial<ITabs2Props>;
    displayName: string;
    private tablistElement;
    private refHandlers;
    constructor(props?: ITabs2Props);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillReceiveProps({selectedTabId}: ITabs2Props): void;
    componentDidUpdate(_prevProps: ITabs2Props, prevState: ITabs2State): void;
    private getInitialSelectedTabId();
    private getKeyCodeDirection(e);
    /** Filters this.props.children to only `<Tab>`s */
    private getTabChildren();
    /** Queries root HTML element for all `.pt-tab`s with optional filter selector */
    private getTabElements(subselector?);
    private handleKeyDown;
    private handleKeyPress;
    private handleTabClick;
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    private moveSelectionIndicator();
    private renderTabPanel;
    private renderTabTitle;
}
export declare const Tabs2Factory: React.Factory<Partial<ITabs2Props>>;
