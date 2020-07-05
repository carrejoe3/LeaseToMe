<template>
  <v-container class="thirdRow">
    <div class="subheading">III: When You're Signing</div>
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
  name: 'thirdRow',
  data () {
    return {
      cards: [
        {
          title: '10 Important Terms in a Commercial Lease',
          body: 'Justin Baker, CEO @ LeaseToMe As you embark on the important journey to rent commercial space, it’s important to understand the lingo and to be…'
        },
        {
          title: 'How Are Commercial Spaces Delivered?',
          body: 'Justin Baker, CEO @ LeaseToMe When you rent retail, office, or industrial space, the landlord can deliver the space to you in pretty much any…'
        },
        {
          title: 'What Is CAM in a Commercial Lease?',
          body: 'Justin Baker, CEO @ LeaseToMe Common area maintenance (CAM) charges are shared expenses for operating, repairing, and maintaining common areas at a commercial property; they’re…'
        },
        {
          title: 'What Are Net, Gross, and Modified Gross Leases?',
          body: 'Justin Baker, CEO @ LeaseToMe There are several operating expenses associated with commercial space which tenants may or may not need to pay in addition…'
        },
        {
          title: 'What Are Termination Options and Relocation Provisions?',
          body: 'Justin Baker, CEO @ LeaseToMe In a commercial lease, termination options and relocation provisions are fairly common clauses that can have a major impact on…'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.thirdRow {
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
