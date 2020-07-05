<template>
  <v-container class="secondaryRow">
    <div class="subheading">II: When You're Negotiating</div>
    <v-divider></v-divider>
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="(card, index) in cards" :key="index">
        <v-card width="215" class="ma-2 mt-5" style="display: flex; flex-direction: column;">
          <v-card-title class="cardTitle">{{ card.title }}</v-card-title>
          <v-card-text style="flex-grow: 1;">{{ card.body }}</v-card-text>
          <v-card-actions>
            <v-btn text>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
export default {
  name: 'secondaryRow',
  data () {
    return {
      cards: [
        {
          title: 'What Is a Tenant Improvement Allowance?',
          body: 'Justin Baker, CEO @ LeaseToMe In a commercial lease, a tenant improvement allowance is an allowance given to a tenant from the landlord to build…'
        },
        {
          title: 'What Is a Rent Abatement in a Commercial Lease?',
          body: 'Justin Baker, CEO @ LeaseToMe A rent abatement is a fancy term for free rent; it’s a specified period of time during which the tenant…'
        },
        {
          title: 'What Are Rent Escalations in a Commercial Lease?',
          body: 'Justin Baker, CEO @ LeaseToMe A rent escalation is simply an increase in the rent payment specified in a lease agreement. Rent escalations (aka increases,…'
        },
        {
          title: 'What Is a Lease Renewal Option?',
          body: 'Justin Baker, CEO @ LeaseToMe A lease renewal option is a clause within the initial agreement that allows the tenant to extend their lease at…'
        },
        {
          title: 'What Is a Commercial Lease Letter of Intent?',
          body: 'Justin Baker, CEO @ LeaseToMe A letter of intent, or LOI, is a document that outlines important terms in a real estate lease to ensure…'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.secondaryRow {
  .subheading {
    color: $darkGreen;
    font-size: 1.2em;
    font-weight: 600;
    line-height: 1.2em;
  }

  .cardTitle {
    word-break: normal;
  }
}
</style>
