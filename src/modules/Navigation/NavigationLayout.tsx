import {Layout, Menu} from 'antd';
import React from 'react';

interface IProps {}

type TProps = React.PropsWithChildren<IProps>;

export const NavigationLayout = (props: TProps) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout.Sider>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.SubMenu key="1" title="Transactions">
                        <Menu.Item key="1_1">All</Menu.Item>
                        <Menu.Item key="1_2">Income</Menu.Item>
                        <Menu.Item key="1_3">Expenses</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Layout.Sider>
            <Layout>
                <Layout.Header style={{ padding: 0 }} />
                <Layout.Content style={{ margin: '0 16px' }}>
                    {props.children}
                </Layout.Content>
            </Layout>
        </Layout>
    )
};
