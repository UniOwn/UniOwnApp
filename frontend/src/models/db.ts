import INavigation from "./Navigation";

export default interface IDataBase {
    [name: string]: INavigation[];
    navigation: INavigation[];
}
