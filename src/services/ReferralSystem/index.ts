import fetchWithValidation from '../../fetchWithValidation';
import distinctAnalyticsSchema from './schemas/distinctAnalyticsSchema';
import linkSchema from './schemas/linkSchema';

type CreateLinkPayloadType = {
  referer: string;
  link_option: number;
};

type SubscribePayloadType = {
  ref_target: string;
  referral: string;
}

type SignatureType = {
  signature: string;
};

class ReferralSystem {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;

    this.getLink = this.getLink.bind(this);
    this.getSubscribersList = this.getSubscribersList.bind(this);
    this.createReferralLink = this.createReferralLink.bind(this);
    this.subscribeToReferral = this.subscribeToReferral.bind(this);
    this.getMyReferral = this.getMyReferral.bind(this);
  }

  getLink = (refererAddress: string) => fetchWithValidation(`${this.apiUrl}/referer/view/link`, linkSchema, {
    headers: {
      'referer-address': refererAddress,
    },
  });

  getMyReferral = (myWalletAddress: string) => fetchWithValidation(
    `${this.apiUrl}/referral/view/link`,
    linkSchema,
    {
      headers: {
        referral: myWalletAddress,
      },
    },
  );

  getSubscribersList = (refererAddress: string) => fetchWithValidation(
    `${this.apiUrl}/referer/view/distinct-analytics`,
    distinctAnalyticsSchema,
    {
      headers: {
        'referer-address': refererAddress,
      },
    },
  );

  createReferralLink = (payload: CreateLinkPayloadType, signature: SignatureType) => fetchWithValidation(
    `${this.apiUrl}/referer/create`,
    linkSchema,
    {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ payload, signature }),
    },
  );

  subscribeToReferral = (payload: SubscribePayloadType, signature: SignatureType) => fetchWithValidation(
    `${this.apiUrl}/referer/subscribe`,
    linkSchema,
    {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ payload, signature }),
    },
  );
}

export * as schemas from './schemas';
export { ReferralSystem };
