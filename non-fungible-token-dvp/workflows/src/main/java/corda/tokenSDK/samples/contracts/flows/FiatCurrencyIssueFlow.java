package corda.tokenSDK.samples.contracts.flows;

import co.paralleluniverse.fibers.Suspendable;
import com.r3.corda.lib.tokens.money.FiatCurrency;
import com.r3.corda.lib.tokens.workflows.flows.rpc.IssueTokens;
import net.corda.core.contracts.Amount;
import net.corda.core.flows.FlowException;
import net.corda.core.flows.FlowLogic;
import net.corda.core.flows.StartableByRPC;
import net.corda.core.identity.Party;
import net.corda.core.transactions.SignedTransaction;

import java.util.Currency;

/**
 * Flow class to issue fiat currency. FiatCurrency is defined in the TokenSDK and is issued as a Fungible Token. This constructor takes the currecy code
 * for the currency to be issued, the amount of the currency to be issued and the recipient as input parameters.
 */
@StartableByRPC
public class FiatCurrencyIssueFlow extends FlowLogic<SignedTransaction> {

    private final String currency;
    private final Long amount;
    private final Party recipient;

    public FiatCurrencyIssueFlow(String currency, Long amount, Party recipient) {
        this.currency = currency;
        this.amount = amount;
        this.recipient = recipient;
    }

    @Override
    @Suspendable
    public SignedTransaction call() throws FlowException {
        /* Create an instance of the fiat currency token */
        FiatCurrency token = new FiatCurrency(Currency.getInstance(currency));
        /* Issue the required amount of the token to the recipient */
        return subFlow(new IssueTokens<>(new Amount<>(amount, token), getOurIdentity(), recipient));
    }

}