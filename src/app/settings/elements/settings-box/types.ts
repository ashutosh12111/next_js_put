export interface ISettingsBox { 
    title: string;
    children: React.ReactElement;
    backButtonUrl: string;
    showDeleteAccount?: boolean
    description?: string
}