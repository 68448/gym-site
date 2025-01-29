import { FC } from "react"
import { Col, Layout, Row } from 'antd';
import styles from './footer.module.css'


const Footer: FC= () => {
    return (
        <Layout className={styles.row} style={{background: 'transparent'}}>
            <Row justify='center'>
                <Col span={8} className={styles.col}>element 1</Col>
                <Col span={8} className={styles.col}>element 2</Col>
                <Col span={8} className={styles.col}>element 3</Col>
            </Row>
        </Layout>
    )
}

export default Footer;