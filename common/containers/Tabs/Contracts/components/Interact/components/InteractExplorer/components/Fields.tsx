import { AmountField } from './AmountField';
import React, { Component } from 'react';
import { SendButton, SigningStatus, TXMetaDataPanel } from 'components';
import WalletDecrypt, { DISABLE_WALLETS } from 'components/WalletDecrypt';
import { FullWalletOnly } from 'components/renderCbs';

interface OwnProps {
  button: React.ReactElement<any>;
}
export class Fields extends Component<OwnProps> {
  public render() {
    const makeContent = () => (
      <React.Fragment>
        <AmountField />
        <TXMetaDataPanel
          className="form-group"
          initialState="advanced"
          disableToggle={true}
          advancedGasOptions={{ dataField: false }}
        />
        {this.props.button}
        <SigningStatus />
        <SendButton />
      </React.Fragment>
    );

    const makeDecrypt = () => <WalletDecrypt disabledWallets={DISABLE_WALLETS.READ_ONLY} />;

    return <FullWalletOnly withFullWallet={makeContent} withoutFullWallet={makeDecrypt} />;
  }
}
