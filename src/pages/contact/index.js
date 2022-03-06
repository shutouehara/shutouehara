import React from 'react';
import Layout from '../../components/layout'
import Seo from "../../components/seo"

export default class Contact extends React.Component {

  render() {
    return (
      <Layout>
        <Seo title="お問合せ" description="shutoueharaへのお問い合わせはこちらから。" />
        <div className="article-container py-5 bg-white px-3 px-sm-4 mx-3 mx-md-auto">
          <div
            className="row m-auto py-5"
          >
            <div className="col order-2 lh-lg">
              <h1>お問い合わせ</h1>
              <p>サイト制作や改修のご相談など、お気軽にお問い合わせください♪</p>
              <form
                name="contact"
                method="post"
                action="/contact/thankyou/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact"/>
                <p hidden>
                  <label className='d-block'>
                    こちらはろぼっと対策です。表示されていても無視してください。:{' '}
                    <input name="bot-field" onChange={this.handleChange}/>
                  </label>
                </p>
                <p>
                  <label className='d-block'>
                    お名前：<br/>
                    <input type="text" name="name" class="form-control" maxLength="30" minLength="2" required placeholder="Enter your name"/>
                  </label>
                </p>
                <p>
                  <label className='d-block'>
                    メールアドレス(返信用)：<br/>
                    <input type="email" name="email" class="form-control" aria-describedby="emailHelp" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required placeholder="Enter your email" />
                  </label>
                </p>
                <p>
                  <label className='d-block'>
                    件名：<br/>
                    <input type="text" name="subject" class="form-control" placeholder="Enter the subject"/>
                  </label>
                </p>
                <p>
                  <label className='d-block'>
                    お問い合わせ内容：<br/>
                    <textarea name="message" class="form-control" />
                  </label>
                </p>
                <p className='my-5'>
                  <button type="submit" class="btn-o d-inline-block justify-content-between w-100 align-items-center position-relative my-0 ps-3 py-2 py-sm-3 fW-bold">送信する</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}