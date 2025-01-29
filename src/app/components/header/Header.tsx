import { FC } from "react"
import { Layout, Menu } from 'antd';

import { Header } from "antd/es/layout/layout";

const items = [
    {key: 1, label: 'Главная'},
    {key: 2, label: 'Профиль'}
]

const HeaderComponent: FC= () => {
    return (
        <Layout breakpoint={'xl'}>
            <Header style={{ display: 'flex', alignItems: 'center' }} width={{maxWidth: '500px'}}>
                <div className="demo-logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={items}
                style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
        </Layout>
    )
}

export default HeaderComponent;