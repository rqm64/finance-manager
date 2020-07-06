declare module '*.less' {
    interface IClassName {
        [className: string]: string;
    }
    const classNames: IClassName;
    export = classNames;
}
