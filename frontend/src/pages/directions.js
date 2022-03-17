import { Answers } from '../components/Answers';
import { Page } from '../components/Page';
import Link from 'next/link';
import { Auth } from '../components/Auth';

export default function Directions() {
  return (
    <Auth>
      <Page>
        <div className="box">
          <div className="content text-center">
            <h3 className="uppercase tracking-wider mb-2">Instructions</h3>
            <h1 className="page-title">It's Easy.</h1>
            <p>Answer the following questions with:</p>
            <Answers disabled={true} />
            <div className="button relative mx-auto w-40 top-32 md:top-20">
              <Link href="/question">
                <a className="button-text no-underline">Start</a>
              </Link>
            </div>
          </div>
        </div>
      </Page>
    </Auth>
  );
}
